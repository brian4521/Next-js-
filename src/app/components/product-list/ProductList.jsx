"use client";
import React, { useState } from "react";
import ProductCard from "../common/ProductCard";

export default function ProductList({ data }) {
  const [product, setproduct] = useState(data);
  return (
    <div>
      <div className="max-w-[1320px] mx-auto m-10">
        <div className="grid grid-cols-4 gap-4">
          {product.map((obj, index) => (
            <ProductCard key={index} data={obj} />
          ))}
        </div>
      </div>
    </div>
  );
}
