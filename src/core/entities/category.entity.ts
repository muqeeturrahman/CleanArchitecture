import { BaseEntity } from './base.entity';
import { Slug } from '../value-objects/slug.value-object';

export interface CategoryProps {
  name: string;
  description?: string;
  isActive?: boolean;
}

export class Category extends BaseEntity {
  private _name: string;
  private _slug: Slug;
  private _description?: string;
  private _isActive: boolean;

  constructor(props: CategoryProps, id?: string) {
    super(id);
    this._name = props.name;
    this._slug = new Slug(props.name);
    this._description = props.description;
    this._isActive = props.isActive ?? true;
  }

  get name() { return this._name; }
  get slug() { return this._slug; }
  get description() { return this._description; }
  get isActive() { return this._isActive; }

  static fromPersistence(rec: any): Category {
    const c = new Category({ name: rec.name, description: rec.description, isActive: rec.isActive }, rec.id);
    (c as any)._createdAt = rec.createdAt;
    (c as any)._updatedAt = rec.updatedAt;
    (c as any)._slug = { getValue: () => rec.slug } as any;
    return c;
  }
}
