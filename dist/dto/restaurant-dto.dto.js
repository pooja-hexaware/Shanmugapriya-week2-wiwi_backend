"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantDto = void 0;
const openapi = require("@nestjs/swagger");
class restaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storename: { required: true, type: () => String }, storeid: { required: true, type: () => Number }, storeaddress: { required: true, type: () => String }, storecity: { required: true, type: () => String }, storezip: { required: true, type: () => String }, storestate: { required: true, type: () => String }, storephone: { required: true, type: () => String }, kitchenphone: { required: true, type: () => String }, menu: { required: true, type: () => [String] }, storeimage: { required: true, type: () => String } };
    }
}
exports.restaurantDto = restaurantDto;
//# sourceMappingURL=restaurant-dto.dto.js.map