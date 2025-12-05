import Header from "../../components/Header/Header";
import HeaderWithFilter from "./HeaderWithFilter/HeaderWithFilter";
import { ProductsContainer } from "./products.styled";
import ProductsList from "./ProductsList/ProductsList";

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
