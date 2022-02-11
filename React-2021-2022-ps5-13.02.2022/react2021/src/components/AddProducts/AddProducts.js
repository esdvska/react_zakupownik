import React, { useState } from "react";
import styles from "../../common/styles/Headers.module.scss";

function AddProducts(props) {
  const [newProductName, setNewProductName] = useState("");
  const [newProductType, setNewProductType] = useState("");
  const [isFoodProduct, setIsFoodProduct] = useState(false);
  const handleNewProductNameChange = (event) => {
    setNewProductName((prev) => event.target.value);
  };
  const handleNewProductTypeChange = (event) => {
    setNewProductType((prev) => event.target.value);
  };
  const handleIsFoodProductChange = (event) => {
    setIsFoodProduct(event.target.checked);
  };
  const addProduct = () => {
    props.addNewProduct({
      nazwa: newProductName,
      kategoria: newProductType,
      produktSpozywczy: isFoodProduct,
    });
    setNewProductName((prev) => "");
    setIsFoodProduct((prev) => false);
    setNewProductType((prev) => "");
  };

  return (
    <div className={styles.Wrapper}>
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
        value={isFoodProduct}
        onChange={handleIsFoodProductChange}
      ></input>
      <button onClick={addProduct}>Dodaj</button>
    </div>
  );
}

export default AddProducts;
