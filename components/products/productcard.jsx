"use client";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export default function ProductCard({product}) {
    return (
      <a href={`/products/${product.slug}`}>
        <Card className="w-96">
          <CardHeader color="blue" className="relative h-56">
            <img
              src={product.images[0].file.url}
              alt={product.name}
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {product.name}
            </Typography>
            <Typography>
              {product.description}
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small">{product.price}</Typography>
          </CardFooter>
        </Card>
      </a>
    );
  }