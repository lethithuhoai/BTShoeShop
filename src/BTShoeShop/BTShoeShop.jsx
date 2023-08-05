import React from "react";
import prdList from "./data.json";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { useState } from "react";
import Cart from "./Cart";
const BTShoeShop = () => {
  const [productDetail, setProductDetail] = useState(prdList[0]);
  const [carts, setCarts] = useState([]);
  const handleProductDetail = (product) => {
    setProductDetail(product);
  };
  const handleCarts = (product) => {
    console.log(product);
    setCarts((currentState) => {
      // kiểm tra lại xem trong cart đã tồn tại sp hay chưa
      const index = currentState.findIndex((item) => item.id === product.id);
      console.log(index);
      if (index !== -1) {
        //sp đã tồn tại trong carts
        currentState[index].cartQuantity += 1;
      } else {
        currentState.push({ ...product, cartQuantity: 1 });
        // currentState.push(product);
      }
      return [...currentState];
    });
  };

  const handleCartQuantity = (id, quantity) => {
    // quantity: +1 => button +
    // quantity: -1 => button -
    setCarts((currentState) => {
      const index = currentState.findIndex((item) => item.id === id);

      currentState[index].cartQuantity += quantity || 1;

      if (currentState[index].cartQuantity < 1) {
        currentState[index].cartQuantity = 1;
      }
      return [...currentState];
    });
  };

  const handleDeleteCart = (id) => {
    setCarts((currentState) => {
      return currentState.filter((item) => item.id != id);
    });
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>BTShoeShop</h1>
        <button
          className="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#cart"
        >
          cart
        </button>
      </div>

      <ProductList
        prdList={prdList}
        handleProductDetail={handleProductDetail}
        handleCarts={handleCarts}
      />

      {/* modal detail  */}
      {/* <ProductDetail /> */}
      <ProductDetail productDetail={productDetail} />
      {/* modal giỏ hàng  */}
      <Cart
        carts={carts}
        handleCartQuantity={handleCartQuantity}
        handleDeleteCart={handleDeleteCart}
      />
    </div>
  );
};

export default BTShoeShop;
