import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ eachProducts, addToCart }) => {
  let { cartItems } = useContext(DataContext);
  let navigate = useNavigate();
  let checkIfExist = cartItems.some((itm) => itm.id == eachProducts.id);

  return (
    <div className="border-zinc-200 border-2 col-span-4">
      <div className="grid grid-cols-2 place-content-center">
        <div className="w-fit ">
          <img className="" src={eachProducts.image} alt="Product image" />
        </div>
        <div className="">
          <h1>Product id - {eachProducts.id}</h1>
          <h1>Product name - {eachProducts.productName}</h1>
          <h1>Brand - {eachProducts.brand}</h1>
          <h1>Price - {eachProducts.price}</h1>
          <h1>Catagory - {eachProducts.category}</h1>
        </div>
      </div>
      <div className="w-full text-center m-3">
        {!checkIfExist && (
          <button
            className="border-2 w-3/4  bg-blue-400 rounded-lg"
            onClick={addToCart}
            id={eachProducts.id}
            name="add-to-cart"
          >
            Add to cart
          </button>
        )}
        {checkIfExist && (
          <div className="m-3">
            <button
              className="px-2 rounded-lg text-4xl bg-blue-300"
              onClick={addToCart}
              id={eachProducts.id}
              name="decre"
            >
              -
            </button>
            <input
              type="text"
              value={
                cartItems.filter((itm) => itm.id == eachProducts.id)[0].quantity
              }
              className="rounded-lg w-10 text-center"
            />
            <button
              className="px-2 rounded-lg text-4xl bg-blue-300"
              onClick={addToCart}
              id={eachProducts.id}
              name="incre"
            >
              +
            </button>
          </div>
        )}
        <div>
          <button className="m-3">Like - {eachProducts.like}</button>
          <button className="m-3">Dislike - {eachProducts.dislike}</button>
        </div>
        <button
          className="border-2 border-blue-400"
          id={eachProducts.id}
          onClick={(eve) => navigate(`${eve.target.id}`)}
        >
          Get details
        </button>
      </div>
    </div>
  );
};

export default Products;
