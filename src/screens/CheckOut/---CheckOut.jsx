import React, { useEffect, useState } from "react";

const CheckOut = () => {
  let price = [{ price: 1 }, { price: 2 }, { price: 3 }];

  let [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("useEfect")
    setTotal(0)
    price.map((itm) => {
      setTotal(preve => preve + itm.price);
    });
  }, []);

  useEffect(() => {
    console.log("----",total);
  }, [total]);

  return <div>{total}</div>;
};

export default CheckOut;
