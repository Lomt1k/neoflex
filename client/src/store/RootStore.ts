import { BasketStore } from "./BasketStore";

class RootStore {
  basketStore: BasketStore = new BasketStore();
}

export default new RootStore();