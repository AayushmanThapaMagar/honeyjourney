"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { StorefrontContext } from "@/provider/storefront-provider";
import { useContext } from "react";

export default function ProductCard({ product }) {
  const handleAddToCartClick = () => {
    const { addItem, open, toggleCart, getCart } =
      useContext(StorefrontContext);

    addItem({ product_id: product.id, quantity: quantity }).then(() => {
      getCart();
      toggleCart(!open);
    });
  };

  return (
    <Card className="w-96 h-120 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <a href={`/products/${product.slug}`}>
        <CardHeader color="blue" className="relative h-56">
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
        <Button onClick={() => handleAddToCartClick()}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
