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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RegisterDto {
    name;
    email;
    password;
    farmName;
    municipality;
    department;
    hectares;
    cooperative;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Carlos Mora', description: 'Nombre completo del agricultor' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'carlos@coffeeguard.co', description: 'Email del agricultor' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email inválido' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'demo1234', description: 'Contraseña (mínimo 6 caracteres)', minLength: 6 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'La Esperanza', description: 'Nombre de la finca' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre de la finca es obligatorio' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "farmName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pitalito', description: 'Municipio donde está la finca' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El municipio es obligatorio' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "municipality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Huila', description: 'Departamento donde está la finca' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El departamento es obligatorio' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.5, description: 'Extensión de la finca en hectáreas' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Las hectáreas deben ser un número' }),
    (0, class_validator_1.Min)(0.1, { message: 'Las hectáreas deben ser mayor a 0' }),
    __metadata("design:type", Number)
], RegisterDto.prototype, "hectares", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cooperativa Cafetera del Huila', description: 'Cooperativa a la que pertenece (opcional)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "cooperative", void 0);
//# sourceMappingURL=register.dto.js.map