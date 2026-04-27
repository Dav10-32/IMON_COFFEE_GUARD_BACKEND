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
exports.AlertsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const alert_schema_1 = require("./schemas/alert.schema");
let AlertsService = class AlertsService {
    alertModel;
    constructor(alertModel) {
        this.alertModel = alertModel;
    }
    async findAllByFarmer(farmerId) {
        return this.alertModel
            .find({ farmerId: new mongoose_2.Types.ObjectId(farmerId) })
            .sort({ read: 1, createdAt: -1 });
    }
    async findByTrap(trapId, farmerId) {
        return this.alertModel
            .find({
            trapId: new mongoose_2.Types.ObjectId(trapId),
            farmerId: new mongoose_2.Types.ObjectId(farmerId),
        })
            .sort({ createdAt: -1 });
    }
    async markAsRead(id, farmerId) {
        const alert = await this.alertModel.findById(id);
        if (!alert) {
            throw new common_1.NotFoundException('Alerta no encontrada');
        }
        if (alert.farmerId.toString() !== farmerId) {
            throw new common_1.ForbiddenException('No tienes acceso a esta alerta');
        }
        alert.read = true;
        return alert.save();
    }
    async countUnread(farmerId) {
        return this.alertModel.countDocuments({
            farmerId: new mongoose_2.Types.ObjectId(farmerId),
            read: false,
        });
    }
};
exports.AlertsService = AlertsService;
exports.AlertsService = AlertsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(alert_schema_1.Alert.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AlertsService);
//# sourceMappingURL=alerts.service.js.map