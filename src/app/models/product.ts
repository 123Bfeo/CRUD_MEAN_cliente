export class Product {
  _id?: number;
  product: string;
  category: string;
  mark: string;
  price: number;

  constructor(product: string, category: string, mark: string, price: number) {
    this.product = product;
    this.category = category;
    this.mark = mark;
    this.price = price;
  }
}
