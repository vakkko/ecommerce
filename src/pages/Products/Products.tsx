import { useSearchParams } from "react-router";
import { useGetProductsQuery } from "../../store/services/productApi/productApi";

import HeaderWithFilter from "./HeaderWithFilter/HeaderWithFilter";
import Pagination from "./Pagination/Pagination";
import ProductsList from "./ProductsList/ProductsList";

import { ProductsContainer } from "./products.styled";

function Products() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page")
    ? searchParams.get("page")?.toString()
    : undefined;
  const from = searchParams.get("from")
    ? searchParams.get("from")?.toString()
    : undefined;

  const to = searchParams.get("to")
    ? searchParams.get("to")?.toString()
    : undefined;

  const sort = searchParams.get("sort") ?? undefined;

  const { data } = useGetProductsQuery({ page, from, to, sort });

  return (
    <>
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
