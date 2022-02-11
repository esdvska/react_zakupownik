import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";
import { useState } from "react";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState(produkty);

  const addToShoppingList = (product) => {
    setShoppingList((state) => [...state, product]);
  };
  const addNewProduct = (product) => {
    // setShoppingList(state => )
  };
  return (
    <div className={styles.appWrapper}>
      <AddProducts addNewProduct={addNewProduct} />
      <ProductsFilters
        produkty={produkty}
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
