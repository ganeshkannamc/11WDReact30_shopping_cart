import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Products from "./Products";

const ListProducts = () => {
  let { loggedUser, myProducts, cartItems, setCartItems } =
    useContext(DataContext);

  let [feed, setFeed] = useState([]);

  let [search, setSearch] = useState(null);

  let [fetchProduct, setFetchProduct] = useState({
    productData: null,
    productLoading: null,
    productError: null,
  });

  // useEffect(() => {
  //   if (fetchProduct.productData  && ) {
  //     setFeed(productData);
  //   }
  // }, [fetchProduct]);

  useEffect(() => {
    setFeed(myProducts);
  }, []);

  useEffect(() => {
    if (search == "") {
      setFeed(myProducts);
    }
  }, [search]);

  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);

  async function getProductAPI() {
    try {
      setFetchProduct((preVal) => ({ ...preVal, productLoading: true }));

      let response = await fetch();
      let data = await response.json();
      if (response.ok) {
        setFetchProduct((preVal) => ({ ...preVal, productData: data }));
      }
      if (!response.ok) {
        setFetchProduct((preVal) => ({ ...preVal, productError: true }));
      }
    } catch (err) {
      setFetchProduct((preVal) => ({ ...preVal, productError: true }));
    } finally {
      setFetchProduct((preVal) => ({ ...preVal, productLoading: false }));
    }
  }

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
        const increMent = cartItems.map((itm) => {
          if (itm.id == eve.target.id) {
            itm.quantity = itm.quantity - 1;
          }
          return itm;
        });
        setCartItems(increMent);
      } else {
        const newCartItm = cartItems.filter((itm) => itm.id != eve.target.id);
        setCartItems(newCartItm);
      }
    }

    if (eve.target.name == "incre") {
      const increMent = cartItems.map((itm) => {
        if (itm.id == eve.target.id) {
          itm.quantity = itm.quantity + 1;
        }
        return itm;
      });
      setCartItems(increMent);
    }
  }

  function handleSearch(eve) {
    setSearch(eve.target.value);
  }

  function handleSearchBtn() {
    let searchedVal = myProducts.filter((itm) => itm.productName == search);
    if (searchedVal.length > 0) {
      setFeed(searchedVal);
    }
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12">
        <input
          onChange={handleSearch}
          type="text"
          value={search}
          className="border-2 border-black"
        />
        <button
          className="border border-blue-600 hover:bg-amber-200"
          onClick={handleSearchBtn}
        >
          Search
        </button>
      </div>
      {feed.map((element) => (
        <Products eachProducts={element} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ListProducts;
