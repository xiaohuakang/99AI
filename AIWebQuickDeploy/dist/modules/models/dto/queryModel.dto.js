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
exports.QueryModelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryModelDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: '页码', required: true }),
    __metadata("design:type", Number)
], QueryModelDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: '数量', required: true }),
    __metadata("design:type", Number)
], QueryModelDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: '模型类型', required: true }),
    __metadata("design:type", Number)
], QueryModelDto.prototype, "keyType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'dsadgadaorjoqm',
        description: '模型key',
        required: true,
    }),
    __metadata("design:type", String)
], QueryModelDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: '是否开启当前key对应的模型',
        required: true,
    }),
    __metadata("design:type", Boolean)
], QueryModelDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'gpt-3.5',
        description: '当前key绑定的模型是多少 需要调用的模型',
        required: true,
    }),
    __metadata("design:type", String)
], QueryModelDto.prototype, "model", void 0);
exports.QueryModelDto = QueryModelDto;
