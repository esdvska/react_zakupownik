import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";

import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState(produkty);
  const [shoppingList, setShoppingList] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState(products);
  const [resetFilters, setResetFilters] = useState(false);

  const addToShoppingList = (product) => {
    setShoppingList((state) => [
      ...state,
      { ...product, id: Math.random(), isClicked: false },
    ]);
  };

  const lineThroughProduct = (index) => {
    setShoppingList((prev) =>
      prev.map((e, i) => (i === index ? { ...e, isClicked: !e.isClicked } : e))
    );
  };
  const addNewProduct = (product) => {
    if (products.some((oldProduct) => oldProduct.nazwa === product.nazwa)) {
      alert(
        "Nie możesz dodać do lisy dostępnych produktów produktu, który już istnieje"
      );
      return;
    }
    setProducts((prev) => [...prev, product]);
    setProductsToDisplay((prev) => [...products, product]);
    setResetFilters((prev) => !prev);
  };

  return (
    <div className={styles.appWrapper}>
      <Container>
        <Row className='justify-content-md-center mx-0'>
          <Col xs lg='6'>
            <AddProducts addNewProduct={addNewProduct} />
          </Col>

          <Col xs lg='6'>
            <ProductsFilters
              produkty={products}
              reset={resetFilters}
              sendFilteredProductsToParentComponent={setProductsToDisplay}
            />
          </Col>
        </Row>
      </Container>
      <div className={styles.columnsWrapper}>
        <ProductsList
          produkty={productsToDisplay}
          addToShoppingList={addToShoppingList}
        />
        <ShopingList
          shoppingList={shoppingList}
          remove={setShoppingList}
          lineThrough={lineThroughProduct}
        />
      </div>
    </div>
  );
}

export default App;
