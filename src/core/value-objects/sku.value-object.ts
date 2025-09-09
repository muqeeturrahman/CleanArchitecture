export class SKU {
  private readonly value: string;
  constructor(sku: string) {
    if (!sku || sku.trim().length === 0) throw new Error('SKU required');
    this.value = sku.trim();
  }
  getValue() { return this.value; }
}
