import React from "react";

import { useGetProductsQuery } from "../../../app/services/productApi/productApi";

import Product from "./Product/Product";

import { ProductsListContainer } from "./products.styled";

export default function ProductsList() {
  const { data } = useGetProductsQuery();

  return (
    <ProductsListContainer>
      {data &&
        data.data.map((product) => (
          <React.Fragment key={product.id}>
            <Product
              cover_image={product.cover_image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </React.Fragment>
        ))}
    </ProductsListContainer>
  );
}
