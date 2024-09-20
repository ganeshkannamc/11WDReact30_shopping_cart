import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import Products from "./Products";

const ListProducts = () => {
  let { loggedUser, myProducts, cartItems, setCartItems } =
    useContext(DataContext);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function addToCart(eve) {
    if (eve.target.name == "add-to-cart") {
      const addToCart = myProducts
        .filter((itm) => itm.id == eve.target.id)
        .map((itm) => {
          itm.quantity = 1;
          return itm;
        });
      setCartItems((preVal) => [...preVal, ...addToCart]);
    }

    if (eve.target.name == "decre") {
      const checkIfValid = cartItems.filter((itm) => itm.id == eve.target.id);
      let quantity = checkIfValid[0].quantity;

      if (quantity >= 1) {
        const increMent = myProducts.map((itm) => {
          if (itm.id == eve.target.id) {
            itm.quantity = itm.quantity - 1;
          }
          return itm;
        });
        setCartItems(increMent);
      }else{
        const newCartItm = cartItems.filter(itm => itm.id != eve.target.id)
        setCartItems(newCartItm);

      }
    }

    if (eve.target.name == "incre") {
      const increMent = myProducts.map((itm) => {
        if (itm.id == eve.target.id) {
          itm.quantity = itm.quantity + 1;
        }
        return itm;
      });
      setCartItems(increMent);
    }
  }
  
  return (
    <div className="grid grid-cols-12 gap-3">
      {myProducts.map((element) => (
        <Products eachProducts={element} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ListProducts;
