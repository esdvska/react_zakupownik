import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }
  // let productsList = props.produkty.map((product) => (
  //   <li
  //     onClick={(event) => props.addToShoppingList(event.target.textContent)}
  //     key={product.nazwa}
  //   >
  //     {product.nazwa}
  //   </li>
  // ));

  render() {
    const productsList = this.props.produkty.map((product) => (
      <li
        onClick={() => this.props.addToShoppingList(product)}
        key={product.nazwa}
      >
        {product.nazwa}
      </li>
    ));
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Lista produktów:</p>
          <ul>{productsList}</ul>
        </header>
      </div>
    );
  }
}

export default ProductsList;
