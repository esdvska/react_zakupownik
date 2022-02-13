import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
      <p className='title is-4 is-spaced' style={{ color: "#774C60" }}>
        Dodaj produkt
      </p>
      <Divider style={{ marginBottom: "15px" }}></Divider>
      <div className='field'>
        <label className='label'>Nazwa produktu:</label>
        <div className='control'>
          <input
            className={!newProductName ? "input is-danger" : "input is-success"}
            value={newProductName}
            onChange={handleNewProductNameChange}
          ></input>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Kategoria produktu:</label>
        <div className='control'>
          <input
            className={!newProductType ? "input is-danger" : "input is-success"}
            value={newProductType}
            onChange={handleNewProductTypeChange}
          ></input>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            type='checkbox'
            checked={isFoodProduct}
            onChange={(e) => setIsFoodProduct(e.target.checked)}
          ></input>{" "}
          <label className='checkbox'> Produkt spożywczy</label>
        </div>
      </div>
      <Button
        variant='success'
        onClick={addProduct}
        disabled={!newProductName || !newProductType}
      >
        Dodaj
      </Button>{" "}
    </div>
  );
}

export default AddProducts;
