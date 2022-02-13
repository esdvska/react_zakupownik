import React from "react";
import { Button } from "react-bootstrap";
import { Divider } from "@material-ui/core";

class ProductsFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: "",
      searchOnlyFood: false,
      searchProductType: "",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.reset !== this.props.reset) {
      this.handleResetFilters();
    }
  };

  handleOnlyFoodChange = (event) => {
    this.setState(
      { ...this.state, searchOnlyFood: !this.state.searchOnlyFood },
      () => this.filterProducts()
    );
  };
  handleSearchPhraseChange = (event) => {
    this.setState({ ...this.state, searchPhrase: event.target.value }, () =>
      this.filterProducts()
    );
  };

  handleSelectProductType = (event) => {
    this.setState(
      { ...this.state, searchProductType: event.target.value },
      () => this.filterProducts()
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
    return uniqueProductsList;
  };

  render() {
    const uniqueProductsTypes = this.getUniqueProductsTypes();
    const { searchPhrase, searchProductType, searchOnlyFood } = this.state;

    return (
      <div>
        <div>
          <p className='title is-4 is-spaced' style={{ color: "#774C60" }}>
            Filtry produktów
          </p>
          <Divider style={{ marginBottom: "15px" }}></Divider>
          <div className='field'>
            <label className='label'>Filtruj według słowa kluczowego:</label>
            <div className='control'>
              <input
                className='input'
                value={searchPhrase}
                placeholder='Szukaj według słowa kluczowego'
                onChange={this.handleSearchPhraseChange}
              ></input>
            </div>
          </div>
        </div>
        <div className='field'>
          <input
            type='checkbox'
            onChange={this.handleOnlyFoodChange}
            checked={searchOnlyFood}
          ></input>{" "}
          <label style={{ marginTop: "12px" }} className='checkbox'>
            {" "}
            Tylko produkty spożywcze
          </label>
        </div>
        <div className='field'>
          <label className='label'>Kategorie:</label>
          <div className='control'>
            <div className='select'>
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
            </div>
          </div>
        </div>
        <Button
          variant='success'
          onClick={this.handleResetFilters}
          disabled={!searchPhrase && !searchOnlyFood && !searchProductType}
        >
          Zresetuj filtry
        </Button>
      </div>
    );
  }
}

export default ProductsFilters;
