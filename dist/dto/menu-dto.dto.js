"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDto = void 0;
const openapi = require("@nestjs/swagger");
class menuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { itemname: { required: true, type: () => String }, baseprice: { required: true, type: () => Number }, itemdescription: { required: true, type: () => String }, itemimage: { required: true, type: () => String }, storeid: { required: true, type: () => [Number] }, toppings: { required: true, type: () => [String] } };
    }
}
exports.menuDto = menuDto;
//# sourceMappingURL=menu-dto.dto.js.map