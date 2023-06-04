import React from "react";
import ProductItem from "./ProductItem";

const Candy = [
  { id: "C1", name: "Eclairs", des: "chocolaty", price: 2, quantity: 1 },
  { id: "C2", name: "Mealody", des: "choccruch", price: 3, quantity: 1},
  { id: "C3", name: "Dairymilk", des: "chocolaty", price: 5, quantity: 1},
];
const Product = () => {
  const candyItem = Candy.map((item) => {
    return <ProductItem key={item.id} item={item} />;
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1 >Welcome To Candy Shop</h1>
      {candyItem}
    </div>
  );
};

export default Product;
