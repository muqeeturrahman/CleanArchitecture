"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slug = void 0;
const slugify_1 = __importDefault(require("slugify"));
class Slug {
    constructor(text) {
        this.value = (0, slugify_1.default)(text || '', { lower: true, strict: true });
        if (!this.value)
            throw new Error('Invalid slug');
    }
    getValue() { return this.value; }
}
exports.Slug = Slug;
//# sourceMappingURL=slug.value-object.js.map