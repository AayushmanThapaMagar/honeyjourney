"use client";

import { Typography } from "@material-tailwind/react";
import ProductCard from "../products/productcard";

export default function FeautredProducts({ products }) {
  return (
    <div
      className="w-screen h-screen justify-center"
      style={{
        backgroundImage: "url('/images/2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(249, 248, 245)",
      }}
    >
      <div className="py-20">
        <Typography color="gray" className="text-center text-4xl font-bold">
          Featured Products
        </Typography>
      </div>

      <div className="flex md:flex-row md:items-center md:justify-center md:mt-20 md:gap-x-20 flex-col gap-y-10 py-2 ">
        {products.reverse().map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </div>
  );
}
