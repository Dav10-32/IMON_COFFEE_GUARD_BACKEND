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
exports.AlertSchema = exports.Alert = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Alert = class Alert {
    trapId;
    farmerId;
    trapName;
    date;
    time;
    level;
    message;
    read;
};
exports.Alert = Alert;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Trap', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Alert.prototype, "trapId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Farmer', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Alert.prototype, "farmerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Alert.prototype, "trapName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Alert.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Alert.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['low', 'medium', 'high'] }),
    __metadata("design:type", String)
], Alert.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Alert.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Alert.prototype, "read", void 0);
exports.Alert = Alert = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Alert);
exports.AlertSchema = mongoose_1.SchemaFactory.createForClass(Alert);
//# sourceMappingURL=alert.schema.js.map