import slugify from 'slugify';

export class Slug {
  private readonly value: string;
  constructor(text: string) {
    this.value = slugify(text || '', { lower: true, strict: true });
    if (!this.value) throw new Error('Invalid slug');
  }
  getValue() { return this.value; }
}
