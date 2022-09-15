import { LIST_PRODUCT } from "./constant";

export const addProduct = (data = [], action) => {
  switch (action.type) {
    case LIST_PRODUCT:
      console.log("add to list product is called", action);
      return action.data;
    default:
      return data;
  }
};
