import { ADD_TO_CART, REMOVE_CART, EMPTY_CART } from "./constant";

export const addProduct = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart action is called", action);
      return [action.data, ...data];
    case REMOVE_CART:
      console.log("remove to cart action is called", action);
      data.length =data.length? data.length-1:[];
      return [...data];
    case EMPTY_CART:
      console.log("empty  cart action is called", action);
      data=[]
      return [...data];
    default:
      return data;
  }
};
