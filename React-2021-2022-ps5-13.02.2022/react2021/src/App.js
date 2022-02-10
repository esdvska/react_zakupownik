import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";
import { useState } from "react";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const addToShoppingList = (product) => {
    setShoppingList((state) => [...state, product]);
  };
  const removeFromShoppingList = (nazwa) => {
    // let shoppingList = this.shoppingList;
    // const index = shoppingList.indexOf()
  };
  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList
          produkty={produkty}
          addToShoppingList={addToShoppingList}
        />
        <ShopingList
          shoppingList={shoppingList}
          remove={removeFromShoppingList}
        />
      </div>
    </div>
  );
}

export default App;
