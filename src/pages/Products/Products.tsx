import Header from "../../components/Header/Header";
import HeaderWithFilter from "./HeaderWithFilter/HeaderWithFilter";
import { ProductsContainer } from "./products.styled";

function Products() {
  return (
    <>
      <Header text="products" url="/products" />
      <ProductsContainer>
        <HeaderWithFilter />
      </ProductsContainer>
    </>
  );
}

export default Products;
