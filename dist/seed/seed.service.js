"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SeedService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = __importStar(require("bcrypt"));
const farmer_schema_1 = require("../farmers/schemas/farmer.schema");
const trap_schema_1 = require("../traps/schemas/trap.schema");
const alert_schema_1 = require("../alerts/schemas/alert.schema");
let SeedService = SeedService_1 = class SeedService {
    farmerModel;
    trapModel;
    alertModel;
    logger = new common_1.Logger(SeedService_1.name);
    constructor(farmerModel, trapModel, alertModel) {
        this.farmerModel = farmerModel;
        this.trapModel = trapModel;
        this.alertModel = alertModel;
    }
    async onModuleInit() {
        const farmerCount = await this.farmerModel.countDocuments();
        if (farmerCount === 0) {
            this.logger.log('🌱 Base de datos vacía, insertando datos de prueba...');
            await this.seed();
            this.logger.log('✅ Datos de prueba insertados exitosamente');
        }
        else {
            this.logger.log('📦 Base de datos ya tiene datos, omitiendo seed');
        }
    }
    async seed() {
        const hashedPassword = await bcrypt.hash('demo1234', 10);
        const farmer = await this.farmerModel.create({
            name: 'Carlos Mora',
            email: 'carlos@coffeeguard.co',
            password: hashedPassword,
            farmName: 'La Esperanza',
            municipality: 'Pitalito',
            department: 'Huila',
            hectares: 4.5,
            cooperative: 'Cooperativa Cafetera del Huila',
        });
        const trap1 = await this.trapModel.create({
            name: 'Trampa N°1',
            location: 'Lote Alto - Cerca del tanque',
            status: 'active',
            batteryLevel: 87,
            lastDetection: 'Hace 2 días',
            connectivity: 'online',
            weeklyActivity: [0, 0, 1, 0, 0, 2, 0],
            farmerId: farmer._id,
        });
        const trap2 = await this.trapModel.create({
            name: 'Trampa N°2',
            location: 'Lote Centro - Entrada principal',
            status: 'alert',
            batteryLevel: 62,
            lastDetection: 'Hace 3 horas',
            connectivity: 'online',
            weeklyActivity: [1, 0, 3, 2, 1, 4, 2],
            farmerId: farmer._id,
        });
        const trap3 = await this.trapModel.create({
            name: 'Trampa N°3',
            location: 'Lote Bajo - Cerca de la quebrada',
            status: 'active',
            batteryLevel: 91,
            lastDetection: 'Hace 5 días',
            connectivity: 'weak',
            weeklyActivity: [0, 0, 0, 0, 1, 0, 0],
            farmerId: farmer._id,
        });
        await this.alertModel.create([
            {
                trapId: trap2._id,
                farmerId: farmer._id,
                trapName: 'Trampa N°2',
                date: '24 abr 2026',
                time: '06:15 a.m.',
                level: 'high',
                message: '¡Atención! Tu trampa N°2 detectó actividad de broca el 24 abr 2026 a las 06:15 a.m. Te recomendamos revisar el cultivo en esa zona.',
                read: false,
            },
            {
                trapId: trap3._id,
                farmerId: farmer._id,
                trapName: 'Trampa N°3',
                date: '20 abr 2026',
                time: '08:30 a.m.',
                level: 'low',
                message: 'Tu trampa N°3 detectó 1 broca el 20 abr 2026 a las 08:30 a.m. Nivel bajo, mantener monitoreo.',
                read: true,
            },
            {
                trapId: trap2._id,
                farmerId: farmer._id,
                trapName: 'Trampa N°2',
                date: '23 abr 2026',
                time: '05:40 a.m.',
                level: 'medium',
                message: 'Tu trampa N°2 detectó 2 brocas el 23 abr 2026 a las 05:40 a.m. Está en nivel de revisión.',
                read: true,
            },
            {
                trapId: trap2._id,
                farmerId: farmer._id,
                trapName: 'Trampa N°2',
                date: '22 abr 2026',
                time: '07:00 a.m.',
                level: 'medium',
                message: 'Tu trampa N°2 detectó 1 broca el 22 abr 2026 a las 07:00 a.m. Está en nivel de revisión.',
                read: true,
            },
        ]);
        this.logger.log(`  👤 Farmer: carlos@coffeeguard.co / demo1234`);
        this.logger.log(`  🪤 Trampas: ${trap1.name}, ${trap2.name}, ${trap3.name}`);
        this.logger.log(`  🔔 4 alertas creadas`);
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = SeedService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(farmer_schema_1.Farmer.name)),
    __param(1, (0, mongoose_1.InjectModel)(trap_schema_1.Trap.name)),
    __param(2, (0, mongoose_1.InjectModel)(alert_schema_1.Alert.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], SeedService);
//# sourceMappingURL=seed.service.js.map