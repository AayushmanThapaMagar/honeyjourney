"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// import Image from "next/image";
export default function ProductCard({ product }) {

  return (
    <Card className="w-96 h-120 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(135,206,235)]">
      <a href={`/products/${product.slug}`}>
        <CardHeader color="#FCA000" className="relative h-100">
          <img
            src={product.images[0].file.url}
            alt={product.name}
            className="object-cover object-center"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {product.name}
          </Typography>
          <Typography>{product.description}</Typography>
        </CardBody>
      </a>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">${product.price}</Typography>
        {/* <Button onClick={() => handleAddToCartClick()}>Add to Cart</Button> */}
      </CardFooter>
    </Card>
  );
}
