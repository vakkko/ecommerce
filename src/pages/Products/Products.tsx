import { useParams } from "react-router";
import { useGetProductsQuery } from "../../store/services/productApi/productApi";

import Header from "../../components/Header/Header";

import HeaderWithFilter from "./HeaderWithFilter/HeaderWithFilter";
import Pagination from "./Pagination/Pagination";
import ProductsList from "./ProductsList/ProductsList";

import { ProductsContainer } from "./products.styled";

function Products() {
  const { page } = useParams();
  const currentPage = Number(page);
  const { data } = useGetProductsQuery({ page: currentPage });

  return (
    <>
      <Header text="products" url="/products" />
      <ProductsContainer>
        <HeaderWithFilter />
        <ProductsList data={data} />
        <Pagination
          currentPage={data?.meta.current_page}
          lastPage={data?.meta.last_page}
        />
      </ProductsContainer>
    </>
  );
}

export default Products;
