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
  const from = searchParams.get("from")
    ? Number(searchParams.get("from"))
    : undefined;

  const to = searchParams.get("to")
    ? Number(searchParams.get("to"))
    : undefined;

  const sort = searchParams.get("sort") ?? undefined;

  const { data } = useGetProductsQuery({ page: currentPage, from, to, sort });

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
