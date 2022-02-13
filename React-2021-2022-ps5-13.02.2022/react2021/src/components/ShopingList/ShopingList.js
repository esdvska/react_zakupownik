import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useEffect, useState } from "react";

function ShopingList(props) {
  const lineAutoStyle = {
    textDecoration: "auto",
  };

  const lineThroughStyle = {
    textDecoration: "line-through",
  };
  const [style, setStyle] = useState(lineAutoStyle);
  const [selectedID, setSelectedID] = useState();
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
          // let newArray = [...productsToBuy];
          // newArray[index] = {
          //   ...productsToBuy[index],
          //   isClicked: !productsToBuy[index].isClicked,
          // };

          lineThroughProduct(event, index);
        }}
        key={product.id}
        style={{
          textDecoration: product.isClicked ? "line-through" : "auto",
        }}
      >
        {product.nazwa}
        {/* {product.isClicked.toString()} */}
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
