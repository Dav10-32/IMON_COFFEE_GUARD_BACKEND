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
exports.TrapsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const traps_service_1 = require("./traps.service");
const alerts_service_1 = require("../alerts/alerts.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_trap_dto_1 = require("./dto/create-trap.dto");
const update_trap_dto_1 = require("./dto/update-trap.dto");
let TrapsController = class TrapsController {
    trapsService;
    alertsService;
    constructor(trapsService, alertsService) {
        this.trapsService = trapsService;
        this.alertsService = alertsService;
    }
    findAll(req) {
        return this.trapsService.findAllByFarmer(req.user.userId);
    }
    async findOne(id, req) {
        const trap = await this.trapsService.findById(id, req.user.userId);
        const alerts = await this.alertsService.findByTrap(id, req.user.userId);
        return {
            ...trap.toObject(),
            lastAlerts: alerts,
        };
    }
    create(req, dto) {
        return this.trapsService.create(req.user.userId, dto);
    }
    update(id, req, dto) {
        return this.trapsService.update(id, req.user.userId, dto);
    }
    delete(id, req) {
        return this.trapsService.delete(id, req.user.userId);
    }
};
exports.TrapsController = TrapsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas las trampas del agricultor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de trampas obtenida exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TrapsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener detalle de una trampa con sus alertas' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la trampa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalle de trampa obtenido exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Trampa no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TrapsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear nueva trampa' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Trampa creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_trap_dto_1.CreateTrapDto]),
    __metadata("design:returntype", void 0)
], TrapsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar trampa' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la trampa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trampa actualizada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Trampa no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_trap_dto_1.UpdateTrapDto]),
    __metadata("design:returntype", void 0)
], TrapsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar trampa' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la trampa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trampa eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Trampa no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TrapsController.prototype, "delete", null);
exports.TrapsController = TrapsController = __decorate([
    (0, swagger_1.ApiTags)('traps'),
    (0, common_1.Controller)('traps'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __metadata("design:paramtypes", [traps_service_1.TrapsService,
        alerts_service_1.AlertsService])
], TrapsController);
//# sourceMappingURL=traps.controller.js.map