import React from "react";
import styles from "../../common/styles/Headers.module.scss";

class ProductsFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: "",
      searchOnlyFood: false,
      searchProductType: "",
    };
  }
  handleOnlyFoodChange = (event) => {
    this.setState({ searchOnlyFood: event.target.checked }, () =>
      this.filterProducts()
    );
  };
  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value }, () =>
      this.filterProducts()
    );
  };

  handleSelectProductType = (event) => {
    this.setState({ searchProductType: event.target.value }, () =>
      this.filterProducts()
    );
  };

  filterProducts = () => {
    const { produkty } = this.props;
    const { searchPhrase, searchProductType, searchOnlyFood } = this.state;

    // odfiltrowanie zgodnych wyników
    let filteredProducts = produkty.filter((product) =>
      product.nazwa.toLowerCase().includes(searchPhrase.toLowerCase())
    );
    if (searchOnlyFood) {
      filteredProducts = filteredProducts.filter(
        (product) => product.produktSpozywczy
      );
    }
    if (searchProductType) {
      filteredProducts = filteredProducts.filter(
        (product) => product.kategoria === searchProductType
      );
    }
    // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
    this.props.sendFilteredProductsToParentComponent(filteredProducts);
  };

  handleResetFilters = () => {
    this.setState(
      {
        searchPhrase: "",
        searchOnlyFood: false,
        searchProductType: "",
      },
      () => {
        this.filterProducts();
      }
    );
  };

  getUniqueProductsTypes = () => {
    const { produkty } = this.props;
    const productsTypeList = produkty.map((product) => product.kategoria);
    const uniqueProductsList = [...new Set(productsTypeList)];
    console.log(uniqueProductsList);
    return uniqueProductsList;
  };

  render() {
    const uniqueProductsTypes = this.getUniqueProductsTypes();
    const { searchPhrase, searchProductType, searchOnlyFood } = this.state;
    return (
      <div>
        <div>
          <h3>Filtry Produktów</h3>
          <input
            value={searchPhrase}
            placeholder='Szukaj według słowa kluczowego'
            onChange={this.handleSearchPhraseChange}
          ></input>
          <p> Tylko produkty spożywcze </p>
          <input
            type='checkbox'
            onChange={this.handleOnlyFoodChange}
            value={searchOnlyFood}
          ></input>
          <p>
            Kategorie:{" "}
            <select
              value={searchProductType}
              onChange={this.handleSelectProductType}
            >
              <option key={"all"} value={""}>
                All types
              </option>
              {uniqueProductsTypes.map((kategoria) => (
                <option key={kategoria} value={kategoria}>
                  {kategoria}
                </option>
              ))}
            </select>
          </p>
          <button onClick={this.handleResetFilters}>Zresetuj filtry</button>
        </div>
      </div>
    );
  }
}

export default ProductsFilters;
