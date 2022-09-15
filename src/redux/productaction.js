import { LIST_PRODUCT } from "./constant";

export const listProduct = (data) => {
  return {
    type: LIST_PRODUCT,
    data,
  };
};
