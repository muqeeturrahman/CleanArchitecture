export class Price {
  private readonly value: number;
  constructor(price: number) {
    if (price < 0) throw new Error('Price cannot be negative');
    this.value = Math.round(price * 100) / 100;
  }
  getValue() { return this.value; }
}
