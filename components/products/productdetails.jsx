"use client";

import { Card } from "@material-tailwind/react";

const ProductDetails = ({ product }) => {

  return (
    // <div className="flex flex-row gap-x-12 pt-10 pl-10">
      // <div className="flex flex-row gap-x-12 pt-10 pl-10 flex flex-col md:flex-row md:items-start md:gap-x-12">
      <div className="flex flex-row gap-x-12 pt-10 pl-10 flex-col md:flex-row md:items-start md:gap-x-12">
        <Card
        className="w-full md:w-2/5 h-30vh md:h-60vh  overflow-hidden"
        >
        <img
        alt={product.name}
        src={product.images[0].file.url}
        className="object-cover object-center"
        />
        </Card>
        <Card className="w-full md:w-3/5 mr-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-medium text-blue-500">
              ${product.price}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Description</h2>
          <p className="mt-4 text-lg text-blue-gray-500">
            {product.description}
          </p>
        </div>
      </Card>
    </div>
  );
};
export default ProductDetails;
