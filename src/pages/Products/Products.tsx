import Header from "../../components/Header/Header";
import HeaderWithFilter from "./HeaderWithFilter/HeaderWithFilter";
import ProductsList from "./ProductsList/ProductsList";

import { ProductsContainer } from "./products.styled";

function Products() {
  return (
    <>
      <Header text="products" url="/products" />
      <ProductsContainer>
        <HeaderWithFilter />
        <ProductsList />
      </ProductsContainer>
    </>
  );
}

export default Products;
