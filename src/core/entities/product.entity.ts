import { BaseEntity } from './base.entity';
import { Price } from '../value-objects/price.value-object';
import { SKU } from '../value-objects/sku.value-object';
import { Slug } from '../value-objects/slug.value-object';

export interface ProductProps {
  name: string;
  description?: string;
  sku: SKU;
  price: Price;
  categoryId: string;
  images?: string[];
  tags?: string[];
}

export class Product extends BaseEntity {
  private _name: string;
  private _slug: Slug;
  private _description?: string;
  private _sku: SKU;
  private _price: Price;
  private _categoryId: string;
  private _images: string[];
  private _tags: string[];

  constructor(props: ProductProps, id?: string) {
    super(id);
    this._name = props.name;
    this._slug = new Slug(props.name);
    this._description = props.description;
    this._sku = props.sku;
    this._price = props.price;
    this._categoryId = props.categoryId;
    this._images = props.images ?? [];
    this._tags = props.tags ?? [];
  }

  get name() { return this._name; }
  get slug() { return this._slug; }
  get description() { return this._description; }
  get sku() { return this._sku; }
  get price() { return this._price; }
  get categoryId() { return this._categoryId; }
  get images() { return [...this._images]; }
  get tags() { return [...this._tags]; }

  static fromPersistence(rec: any): Product {
    const p = new Product({
      name: rec.name,
      description: rec.description,
      sku: new SKU(rec.sku),
      price: new Price(Number(rec.price)),
      categoryId: rec.categoryId,
      images: rec.images ?? [],
      tags: rec.tags ?? []
    }, rec.id);
    (p as any)._createdAt = rec.createdAt;
    (p as any)._updatedAt = rec.updatedAt;
    (p as any)._slug = { getValue: () => rec.slug } as any;
    return p;
  }
}
