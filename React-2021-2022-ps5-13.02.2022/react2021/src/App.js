import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import styles from "./App.module.scss";
import produkty from "./common/consts/produkty";

import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Paper, CardContent } from "@material-ui/core";

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
    if (
      products.some(
        (oldProduct) =>
          oldProduct.nazwa.toLowerCase() === product.nazwa.toLowerCase()
      )
    ) {
      alert(
        "Nie możesz dodać do lisy dostępnych produktów produktu, który już istnieje"
      );
      return;
    }
    setProducts((prev) => [...prev, product]);
    setProductsToDisplay([...products, product]);
    setResetFilters((prev) => !prev);
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.cardsWrapper}>
        <Container>
          <Row className='justify-content-md-center'>
            <Col xs lg='6'>
              <Paper elevation={5}>
                <CardContent style={{ height: "350px" }}>
                  <AddProducts addNewProduct={addNewProduct} />
                </CardContent>
              </Paper>
            </Col>

            <Col xs lg='6'>
              <Paper elevation={5}>
                <CardContent style={{ height: "350px" }}>
                  <ProductsFilters
                    produkty={products}
                    reset={resetFilters}
                    sendFilteredProductsToParentComponent={setProductsToDisplay}
                  />
                </CardContent>
              </Paper>
            </Col>
          </Row>
        </Container>
      </div>
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
