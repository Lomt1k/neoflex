import { makeAutoObservable } from "mobx";
import { Headphones } from "../api/Headphones";

export interface BasketProductInfo {
  product: Headphones,
  count: number,
}

export class BasketStore {
  productsById: Map<string, BasketProductInfo> = new Map();

  get productsCount() {
    let count = 0;
    for (let productInfo of this.productsById.values()) {
      count += productInfo.count;
    }
    return count;
  }

  constructor() {
    makeAutoObservable(this);
  }

  add(product: Headphones) {
    const productInfo = this.productsById.get(product.id);
    if (productInfo) {
      productInfo.count++;
      return;
    }
    this.productsById.set(product.id, { product, count: 1 });
  }

  remove(productId: string) {
    const productInfo = this.productsById.get(productId);
    if (!productInfo) {
      return;
    }
    productInfo.count > 1
      ? productInfo.count--
      : this.productsById.delete(productId);
  }
}