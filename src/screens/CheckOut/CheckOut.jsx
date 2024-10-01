import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";

const CheckOut = () => {
  let { cartItems } = useContext(DataContext);
  // console.log(cartItems);

  let [totalQuantity, setTotalQuantity] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(0);
    setTotalQuantity(0);
    cartItems.map((itm) => {
      setTotalPrice((preve) => preve + itm.price * itm.quantity);
    });
    cartItems.map((itm) => {
      setTotalQuantity((preve) => preve + itm.quantity);
    });
  }, []);

  //   {
  //     "id": 1,
  //     "productName": "Flip 4",
  //     "brand": "Samsung",
  //     "price": 20,
  //     "category": "mobile",
  //     "image": "data:image/jpeg;base64,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",
  //     "like": 0,
  //     "dislike": 0,
  //     "quantity": 3
  // }

  return (
    <div>
      <table className="w-full text-center border-2 border-blue-400">
        <tr className="text-center border-2 border-blue-400">
          <th className="text-center border-2 border-blue-400">Product Name</th>
          <th className="text-center border-2 border-blue-400">Quantity</th>
          <th className="text-center border-2 border-blue-400">Price</th>
          <th className="text-center border-2 border-blue-400">Total</th>
        </tr>
        {cartItems.map((eachProd) => (
          <tr className="text-center border-2 border-blue-400">
            <td className="text-center border-2 border-blue-400">
              {eachProd.productName}
            </td>
            <td className="text-center border-2 border-blue-400">
              {eachProd.quantity}
            </td>
            <td className="text-center border-2 border-blue-400">
              {eachProd.price}
            </td>
            <td className="text-center border-2 border-blue-400">
              {eachProd.price * eachProd.quantity}
            </td>
          </tr>
        ))}
      </table>
      <div className="w-full flex justify-center grow border-2 border-blue-400 bg-slate-300">
        <div className="w-1/2 text-center">
          Total quantity - {totalQuantity}{" "}
        </div>
        <div className="w-1/2 text-center">Total price - {totalPrice}</div>
      </div>
    </div>
  );
};

export default CheckOut;
