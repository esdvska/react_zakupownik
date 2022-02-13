import React, { useState } from "react";
import styles from "../../common/styles/Headers.module.scss";

function AddProducts(props) {
  const [newProductName, setNewProductName] = useState("");
  const [newProductType, setNewProductType] = useState("");
  const [isFoodProduct, setIsFoodProduct] = useState(false);
  const handleNewProductNameChange = (event) => {
    setNewProductName(event.target.value);
  };
  const handleNewProductTypeChange = (event) => {
    setNewProductType(event.target.value);
  };

  const addProduct = () => {
    props.addNewProduct({
      nazwa: newProductName,
      kategoria: newProductType,
      produktSpozywczy: isFoodProduct,
    });
    setNewProductName("");
    setIsFoodProduct(false);
    setNewProductType("");
  };

  return (
    <div>
      Add products
      <label>Nazwa produktu:</label>
      <input
        value={newProductName}
        onChange={handleNewProductNameChange}
      ></input>
      <label>Kategoria produktu:</label>
      <input
        value={newProductType}
        onChange={handleNewProductTypeChange}
      ></input>
      <label>Produkt spożywczy</label>
      <input
        type='checkbox'
        checked={isFoodProduct}
        onChange={(e) => setIsFoodProduct(e.target.checked)}
      ></input>
      <button onClick={addProduct}>Dodaj</button>
    </div>
  );
}

export default AddProducts;
