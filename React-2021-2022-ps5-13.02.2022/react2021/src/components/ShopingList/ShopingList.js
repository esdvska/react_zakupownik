import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useEffect, useState } from "react";
import styles from "../../App.module.scss";

function ShopingList(props) {
  const [productsToBuy, setProductsToBuy] = useState(null);

  useEffect(() => {
    setProductsToBuy(props.shoppingList);
  }, [props.shoppingList]);

  const removeFromShoppingList = (id) => {
    props.remove(productsToBuy.filter((product) => product.id !== id));
  };

  const lineThroughProduct = (event, id) => {
    event.preventDefault();
    props.lineThrough(id);
  };

  const productsToDisplay = productsToBuy?.map((product, index) => {
    return (
      <li
        onClick={() => {
          removeFromShoppingList(product.id);
        }}
        onContextMenu={(event) => {
          lineThroughProduct(event, index);
        }}
        key={product.id}
        style={{
          textDecoration: product.isClicked ? "line-through" : "auto",
        }}
      >
        {product.nazwa}
      </li>
    );
  });

  return (
    <div className={commonColumnsStyles.App}>
      <div className={styles.shoppingList}>
        <h2>Lista zakupów</h2>
        <ul>{productsToDisplay}</ul>
      </div>
    </div>
  );
}

export default ShopingList;
