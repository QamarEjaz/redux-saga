import { takeEvery } from "redux-saga/effects";
import { LIST_PRODUCT } from "./constant";
function* getProduct() {
  const result = yield fetch("https://jsonplaceholder.typicode.com/posts");
  const post = yield result.json();
  console.log("post data", post);
}
function* productSaga() {
  yield takeEvery(LIST_PRODUCT, getProduct);
}
export default productSaga;
