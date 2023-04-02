import { getProduct } from "../db/inventory"

export const getItemsCount = (cart) => {
  return cart.reduce((count,item) => count+item.qty,0)
}

export const getTotal = (cart) => {
  return cart
    .reduce((total, item) => total + (getProduct(item.id).price * item.qty), 0)
}