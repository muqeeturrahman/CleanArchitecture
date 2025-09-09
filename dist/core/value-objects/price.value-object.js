"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
class Price {
    constructor(price) {
        if (price < 0)
            throw new Error('Price cannot be negative');
        this.value = Math.round(price * 100) / 100;
    }
    getValue() { return this.value; }
}
exports.Price = Price;
//# sourceMappingURL=price.value-object.js.map