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
exports.FarmersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const farmer_schema_1 = require("./schemas/farmer.schema");
let FarmersService = class FarmersService {
    farmerModel;
    constructor(farmerModel) {
        this.farmerModel = farmerModel;
    }
    async findById(id) {
        return this.farmerModel.findById(id).select('-password');
    }
    async findByEmail(email) {
        return this.farmerModel.findOne({ email: email.toLowerCase() });
    }
    async create(data) {
        return this.farmerModel.create(data);
    }
    async update(id, data) {
        return this.farmerModel
            .findByIdAndUpdate(id, { $set: data }, { new: true })
            .select('-password');
    }
    async count() {
        return this.farmerModel.countDocuments();
    }
};
exports.FarmersService = FarmersService;
exports.FarmersService = FarmersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(farmer_schema_1.Farmer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FarmersService);
//# sourceMappingURL=farmers.service.js.map