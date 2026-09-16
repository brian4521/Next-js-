import React from "react";
import ProductCard from "../common/ProductCard";

export default function Product() {
  return (
    <section className="bg-amber-200 py-8 mt-4">
      <h2 className="text-center text-bold">Product</h2>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
