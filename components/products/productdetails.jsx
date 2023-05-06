"use client";

import { useContext, useState } from "react";
import { Button, Card, Typography, Input } from "@material-tailwind/react";
import { StorefrontContext } from "@/provider/storefront-provider";

const ProductDetails = ({ product }) => {
  const { addItem, open, toggleCart, getCart  } = useContext(StorefrontContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCartClick = () => {
    addItem({ product_id: product.id, quantity: quantity }).then(() => {
      getCart();
      toggleCart(!open);

    });
  };

 
  return (
    <div className=" md:mr-20 md:ml-20 flex flex-row gap-x-12 pt-10 pl-10 pr-10 flex-col md:flex-row md:items-start md:gap-x-12 sm:gap-y-5">
      <Card className="w-full md:w-2/5 h-30vh md:h-10vh md:pr-50 overflow-hidden">
        <img
          alt={product.name}
          src={product.images[0].file.url}
          className="object-cover object-center overflow-hidden"
        />
      </Card>
      <Card className="w-full h-30vh md:pr-50 md:w-3/5">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {product.name}
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          ${product.price}
        </Typography>
        <Typography color="gray" className="font-normal">
          {product.description}
        </Typography>
        <div className="flex flex-row gap-4">

          <div className="w-1/3">
          <Input 
            id= "quantity"
            value={quantity}
            type="number"
            onChange={handleQuantityChange}
            variant="standard" 
            label="Quantity" />
          </div>
          <div className="w-2/3">
          <Button
            className="w-full"
            onClick={() => handleAddToCartClick()}
          >
            Add to cart
          </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ProductDetails;
