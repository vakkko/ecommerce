import { useSearchParams } from "react-router";
import { useGetProductsQuery } from "../../store/services/productApi/productApi";

import Header from "../../components/Header/Header";

import HeaderWithFilter from "./HeaderWithFilter/HeaderWithFilter";
import Pagination from "./Pagination/Pagination";
import ProductsList from "./ProductsList/ProductsList";

import { ProductsContainer } from "./products.styled";

function Products() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const { data } = useGetProductsQuery({ page: currentPage });

  return (
    <>
      <Header productsPage text="products" />
      <ProductsContainer>
        <HeaderWithFilter
          from={data?.meta.from}
          to={data?.meta.to}
          total={data?.meta.total}
        />
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
