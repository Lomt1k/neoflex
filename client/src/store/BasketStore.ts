import { makeAutoObservable } from "mobx";
import { Headphones } from "../api/Headphones";
import { getActualPrice } from "../utils/ProductHelper";

export interface BasketProductInfo {
  product: Headphones,
  count: number,
}

export class BasketStore {
  productsById: Map<string, BasketProductInfo> = new Map();

  get productsCount(): number {
    let count = 0;
    for (let productInfo of this.productsById.values()) {
      count += productInfo.count;
    }
    return count;
  }

  get totalSum(): number {
    let sum = 0;
    for (let {product, count} of this.productsById.values()) {
      const actualPrice = getActualPrice(product);
      sum += actualPrice * count;
    }
    return sum;
  }

  constructor() {
    makeAutoObservable(this);
  }

  add(product: Headphones): void {
    const productInfo = this.productsById.get(product.id);
    if (productInfo) {
      productInfo.count++;
      return;
    }
    this.productsById.set(product.id, { product, count: 1 });
  }

  remove(productId: string): void {
    const productInfo = this.productsById.get(productId);
    if (!productInfo) {
      return;
    }
    productInfo.count > 1
      ? productInfo.count--
      : this.productsById.delete(productId);
  }

  removeAll(productId: string): void {
    this.productsById.delete(productId);
  }
}