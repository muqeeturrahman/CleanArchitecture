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
exports.PrismaProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const product_entity_1 = require("../../../core/entities/product.entity");
let PrismaProductRepository = class PrismaProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    toDomain(rec) {
        return product_entity_1.Product.fromPersistence(rec);
    }
    async save(product) {
        var _a;
        const data = {
            id: product.id,
            name: product.name,
            slug: product.slug.getValue(),
            sku: product.sku.getValue(),
            price: product.price.getValue(),
            inventory: (_a = product['inventory']) !== null && _a !== void 0 ? _a : 0,
            images: product.images,
            tags: product.tags,
            isActive: true,
            isFeatured: false,
            categoryId: product.categoryId,
        };
        const rec = await this.prisma.product.upsert({
            where: { id: product.id },
            create: data,
            update: data,
        });
        return this.toDomain(rec);
    }
    async findById(id) {
        const rec = await this.prisma.product.findUnique({ where: { id } });
        return rec ? this.toDomain(rec) : null;
    }
    async findBySku(sku) {
        const rec = await this.prisma.product.findUnique({ where: { sku } });
        return rec ? this.toDomain(rec) : null;
    }
    async search(filters, options) {
        var _a, _b;
        const page = (_a = options === null || options === void 0 ? void 0 : options.page) !== null && _a !== void 0 ? _a : 1;
        const limit = (_b = options === null || options === void 0 ? void 0 : options.limit) !== null && _b !== void 0 ? _b : 20;
        const skip = (page - 1) * limit;
        const where = {};
        if (filters === null || filters === void 0 ? void 0 : filters.search) {
            where.OR = [
                { name: { contains: filters.search, mode: 'insensitive' } },
                { description: { contains: filters.search, mode: 'insensitive' } },
            ];
        }
        const [items, total] = await Promise.all([
            this.prisma.product.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
            this.prisma.product.count({ where }),
        ]);
        const products = items.map((r) => this.toDomain(r));
        return { products, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
};
exports.PrismaProductRepository = PrismaProductRepository;
exports.PrismaProductRepository = PrismaProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaProductRepository);
//# sourceMappingURL=product.repository.js.map