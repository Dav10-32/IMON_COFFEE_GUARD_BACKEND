"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const farmer_schema_1 = require("./schemas/farmer.schema");
const farmers_service_1 = require("./farmers.service");
const farmers_controller_1 = require("./farmers.controller");
const traps_module_1 = require("../traps/traps.module");
let FarmersModule = class FarmersModule {
};
exports.FarmersModule = FarmersModule;
exports.FarmersModule = FarmersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: farmer_schema_1.Farmer.name, schema: farmer_schema_1.FarmerSchema }]),
            (0, common_1.forwardRef)(() => traps_module_1.TrapsModule),
        ],
        controllers: [farmers_controller_1.FarmersController],
        providers: [farmers_service_1.FarmersService],
        exports: [farmers_service_1.FarmersService],
    })
], FarmersModule);
//# sourceMappingURL=farmers.module.js.map