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
exports.PrismaCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const category_entity_1 = require("../../../core/entities/category.entity");
let PrismaCategoryRepository = class PrismaCategoryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(category) {
        var _a;
        const rec = await this.prisma.category.create({
            data: {
                id: category.id,
                name: category.name,
                slug: category.slug.getValue(),
                description: (_a = category.description) !== null && _a !== void 0 ? _a : null,
                isActive: category.isActive,
            }
        });
        return category_entity_1.Category.fromPersistence(rec);
    }
    async findById(id) {
        const rec = await this.prisma.category.findUnique({ where: { id } });
        return rec ? category_entity_1.Category.fromPersistence(rec) : null;
    }
    async findAll() {
        const items = await this.prisma.category.findMany();
        return items.map((r) => category_entity_1.Category.fromPersistence(r));
    }
    async exists(id) {
        const count = await this.prisma.category.count({ where: { id } });
        return count > 0;
    }
};
exports.PrismaCategoryRepository = PrismaCategoryRepository;
exports.PrismaCategoryRepository = PrismaCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaCategoryRepository);
//# sourceMappingURL=category.repository.js.map