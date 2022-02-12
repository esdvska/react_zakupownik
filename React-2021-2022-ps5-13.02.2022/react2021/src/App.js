import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState(produkty);
  const [shoppingList, setShoppingList] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState(products);
  const [resetFilters, setResetFilters] = useState(false);

  const addToShoppingList = (product) => {
    setShoppingList((state) => [...state, product]);
  };

  const addNewProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    setProductsToDisplay((prev) => [...products, product]);
    setResetFilters((prev) => true);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts addNewProduct={addNewProduct} />
      <ProductsFilters
        produkty={products}
        reset={resetFilters}
        sendFilteredProductsToParentComponent={setProductsToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          produkty={productsToDisplay}
          addToShoppingList={addToShoppingList}
        />
        <ShopingList shoppingList={shoppingList} remove={setShoppingList} />
      </div>
    </div>
  );
}

export default App;
