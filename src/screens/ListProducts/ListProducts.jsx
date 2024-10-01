import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Products from "./Products";
import AddButton from "../../component/AddButton";

const ListProducts = () => {
  let { loggedUser, myProducts, setMyProducts, cartItems, setCartItems } =
    useContext(DataContext);

  let [feed, setFeed] = useState([]);

  let [search, setSearch] = useState(null);

  let [addDiv, setAddDiv] = useState(false);

  let [addProduct, setAddProduct] = useState({
    productName: "",
    brand: "",
    price: "",
    category: "",
    image: "",
  });

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

  let myTimeOut = null;
  function handleSearch(eve) {
    if (!myTimeOut) clearTimeout(myTimeOut);

    myTimeOut = setTimeout(() => {
      let searchedVal = myProducts.filter((itm) =>
        itm.productName.toLowerCase().includes(eve.target.value.toLowerCase())
      );
      if (searchedVal.length > 0) {
        setFeed(searchedVal);
      }
    }, 3000);

    setSearch(eve.target.value);
  }
  function manageAddOnChange(eve) {
    setAddProduct((preVal) => ({
      ...preVal,
      [eve.target.id]: eve.target.value,
    }));
  }

  function handleSearchBtn() {
    let searchedVal = myProducts.filter((itm) =>
      itm.productName.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedVal.length > 0) {
      setFeed(searchedVal);
    }
  }

  function manageAddClick() {
    console.log(addProduct);
    addProduct.id = myProducts.length + 1;
    addProduct.like = 0;
    addProduct.dislike = 0;
    setMyProducts((preVal) => [...preVal, addProduct]);
    setAddDiv(false);
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
        <button
          onClick={() => setAddDiv(true)}
          className="border border-blue-600 hover:bg-amber-200 m-5 p-2"
        >
          Add
        </button>
      </div>

      {addDiv && (
        <div className="col-span-12 border border-black rounded-lg shadow-lg m-5 p-3">
          <h1>Add product</h1>

          <input
            id="productName"
            placeholder="name"
            className="border border-black p-3 m-3"
            value={addProduct.productName}
            onChange={manageAddOnChange}
          />
          <input
            id="brand"
            placeholder="brand"
            className="border border-black p-3 m-3"
            value={addProduct.brand}
            onChange={manageAddOnChange}
          />
          <input
            id="price"
            placeholder="price"
            className="border border-black p-3 m-3"
            value={addProduct.price}
            onChange={manageAddOnChange}
          />
          <input
            id="category"
            placeholder="category"
            className="border border-black p-3 m-3"
            value={addProduct.category}
            onChange={manageAddOnChange}
          />
          <input
            id="image"
            placeholder="image"
            className="border border-black p-3 m-3"
            value={addProduct.image}
            onChange={manageAddOnChange}
          />
          <AddButton
            manageClick={manageAddClick}
            value={"Add"}
            style={"m-2 p-3 min-w-10 rounded-xl bg-green-300"}
          />
        </div>
      )}

      {feed.length > 0 ? (
        feed.map((element, ind) => (
          <Products key={ind} eachProducts={element} addToCart={addToCart} />
        ))
      ) : (
        <h1>No list to dispaly</h1>
      )}
    </div>
  );
};

export default ListProducts;
