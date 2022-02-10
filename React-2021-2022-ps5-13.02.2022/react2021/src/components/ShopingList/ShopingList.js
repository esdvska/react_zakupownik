import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useEffect, useState } from "react";

function ShopingList(props) {
  // const [shoppingList, setShoppingList] = useState(props.shoppingList);
  const productsToBuy = props.shoppingList.map((product) => ({
    ...product,
    id: Math.random(),
  }));
  const productsToDisplay = productsToBuy.map((product) => {
    return (
      <li
        onClick={() => {
          this.props.remove(product.nazwa);
        }}
        key={product.id}
      >
        {product.nazwa}
      </li>
    );
  });
  // useEffect(() => {
  //   setShoppingList((state) => props.shoppingList);
  // }, [props.shoppingList]);
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>{productsToDisplay}</ul>
      </header>
    </div>
  );
}

export default ShopingList;
