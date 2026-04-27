"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrapsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const trap_schema_1 = require("./schemas/trap.schema");
const traps_service_1 = require("./traps.service");
const traps_controller_1 = require("./traps.controller");
const alerts_module_1 = require("../alerts/alerts.module");
let TrapsModule = class TrapsModule {
};
exports.TrapsModule = TrapsModule;
exports.TrapsModule = TrapsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: trap_schema_1.Trap.name, schema: trap_schema_1.TrapSchema }]),
            (0, common_1.forwardRef)(() => alerts_module_1.AlertsModule),
        ],
        controllers: [traps_controller_1.TrapsController],
        providers: [traps_service_1.TrapsService],
        exports: [traps_service_1.TrapsService],
    })
], TrapsModule);
//# sourceMappingURL=traps.module.js.map