import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import styles from "../../App.module.scss";

function ProductsList(props) {
  const productsList = props.produkty.map((product) => (
    <li onClick={() => props.addToShoppingList(product)} key={product.nazwa}>
      {product.nazwa}
    </li>
  ));

  return (
    <div className={commonColumnsStyles.App}>
      <div className={styles.shoppingList}>
        <h2>Lista produktów:</h2>
        <ul>{productsList}</ul>
      </div>
    </div>
  );
}

export default ProductsList;
