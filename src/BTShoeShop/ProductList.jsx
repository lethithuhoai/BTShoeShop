import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { prdList, handleProductDetail, handleCarts } = props;
  return (
    <div className="row">
      {prdList.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            handleProductDetail={handleProductDetail}
            handleCarts={handleCarts}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
