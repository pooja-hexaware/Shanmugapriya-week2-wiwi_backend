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
exports.restaurantSchema = exports.restaurant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const menu_schema_1 = require("./menu.schema");
let restaurant = class restaurant {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storename", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], restaurant.prototype, "storeid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storeaddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storecity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storezip", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storestate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storephone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "kitchenphone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], restaurant.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], restaurant.prototype, "storeimage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: menu_schema_1.menu.name }] }),
    __metadata("design:type", Array)
], restaurant.prototype, "menus", void 0);
restaurant = __decorate([
    (0, mongoose_1.Schema)()
], restaurant);
exports.restaurant = restaurant;
exports.restaurantSchema = mongoose_1.SchemaFactory.createForClass(restaurant);
//# sourceMappingURL=restaurant.schema.js.map