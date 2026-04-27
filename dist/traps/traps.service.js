"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrapsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const trap_schema_1 = require("./schemas/trap.schema");
let TrapsService = class TrapsService {
    trapModel;
    constructor(trapModel) {
        this.trapModel = trapModel;
    }
    async findAllByFarmer(farmerId) {
        return this.trapModel.find({ farmerId: new mongoose_2.Types.ObjectId(farmerId) }).sort({ createdAt: -1 });
    }
    async findById(id, farmerId) {
        const trap = await this.trapModel.findById(id);
        if (!trap) {
            throw new common_1.NotFoundException('Trampa no encontrada');
        }
        if (trap.farmerId.toString() !== farmerId) {
            throw new common_1.ForbiddenException('No tienes acceso a esta trampa');
        }
        return trap;
    }
    async create(farmerId, dto) {
        return this.trapModel.create({
            ...dto,
            farmerId: new mongoose_2.Types.ObjectId(farmerId),
            status: 'active',
            batteryLevel: 100,
            lastDetection: 'Recién instalada',
            connectivity: 'online',
            weeklyActivity: [0, 0, 0, 0, 0, 0, 0],
        });
    }
    async update(id, farmerId, dto) {
        const trap = await this.findById(id, farmerId);
        Object.assign(trap, dto);
        return trap.save();
    }
    async delete(id, farmerId) {
        await this.findById(id, farmerId);
        await this.trapModel.findByIdAndDelete(id);
    }
    async countByFarmer(farmerId) {
        const total = await this.trapModel.countDocuments({ farmerId: new mongoose_2.Types.ObjectId(farmerId) });
        const active = await this.trapModel.countDocuments({
            farmerId: new mongoose_2.Types.ObjectId(farmerId),
            status: { $in: ['active', 'alert'] },
        });
        return { total, active };
    }
};
exports.TrapsService = TrapsService;
exports.TrapsService = TrapsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(trap_schema_1.Trap.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TrapsService);
//# sourceMappingURL=traps.service.js.map