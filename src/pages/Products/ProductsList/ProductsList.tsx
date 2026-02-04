import React from "react";

import ProductItem from "./ProductItem/ProductItem";

import type { ProductsListProps } from "./productsList.types";

import { ProductsListContainer } from "./products.styled";
import { Link } from "react-router";

export default function ProductsList({ data }: ProductsListProps) {
  return (
    <ProductsListContainer>
      {data &&
        data.data.map((product) => (
          <React.Fragment key={product.id}>
            <Link to={`/product/${String(product.id)}`}>
              <ProductItem
                cover_image={product.cover_image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </Link>
          </React.Fragment>
        ))}
    </ProductsListContainer>
  );
}
