//for add item to cart
import { ADD_TO_CART } from "../constant";
import { REMOVE_TO_CART } from "../constant";
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};


export const removeToCart = (product) => {
  return {
    type: REMOVE_TO_CART,
    payload: product,
  };
}
