
import { addToCart, emptyCart, removeCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { listProduct } from "../redux/productaction";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "product1",
    type: "mobile",
    model: "iphone",
  };
  return (
    <>
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeCart(product.name))}>Remove Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(listProduct(product))}>List Product</button>
    </div>
    </>
  );
}

export default Main;
