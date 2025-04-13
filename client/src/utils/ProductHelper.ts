import { Headphones } from "../api/Headphones"

export const getActualPrice = ({ price, discount }: Headphones): number => {
  return discount
    ? price * (1 - discount)
    : price;
}