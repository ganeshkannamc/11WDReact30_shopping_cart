import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { myProducts } = useContext(DataContext);
  let [selectedItm, setSelectedItm] = useState({});
  let getData = useParams();
  console.log(getData.id);
  useEffect(() => {
    getSelectedProduct();
  }, []);

  function getSelectedProduct() {
    let [selected] = myProducts.filter((itm) => itm.id == getData.id);
    setSelectedItm(selected);
  }

  return <div>{selectedItm.productName}</div>;
};

export default ProductDetails;
