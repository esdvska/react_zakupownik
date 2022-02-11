import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useEffect, useState } from "react";

function ShopingList(props) {
  const productsToBuy = props.shoppingList.map((product) => ({
    ...product,
    id: Math.random(),
  }));

  const removeFromShoppingList = (id) => {
    props.remove(productsToBuy.filter((product) => product.id !== id));
  };
  const productsToDisplay = productsToBuy.map((product) => {
    return (
      <li
        onClick={() => {
          removeFromShoppingList(product.id);
        }}
        key={product.id}
      >
        {product.nazwa}
      </li>
    );
  });

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
