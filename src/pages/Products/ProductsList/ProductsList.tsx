import React from "react";

import Product from "./Product/Product";

import type { ProductsListProps } from "./productsList.types";

import { ProductsListContainer } from "./products.styled";

export default function ProductsList({ data }: ProductsListProps) {
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
