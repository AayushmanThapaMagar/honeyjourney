"use client";

import { useContext, useState } from "react";
import { clearCart } from "@/lib/swell/hooks";
import { Button, Card, Typography, Input } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import { cart } from "swell-js";
import { StorefrontContext } from "@/provider/storefront-provider";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCartClick = () => {
    addItem({ product_id: product.id, quantity: quantity }).then(() => {
      toggleCart(!open);
    });
  };

  const { addItem, open, toggleCart } = useContext(StorefrontContext);
  return (
    <div className=" md:mr-20 md:ml-20 flex flex-row gap-x-12 pt-10 pl-10 pr-10 flex-col md:flex-row md:items-start md:gap-x-12 sm:gap-y-5">
      <Card className="w-full md:w-2/5 h-30vh md:h-60vh md:pr-50 overflow-hidden">
        <img
          alt={product.name}
          src={product.images[0].file.url}
          className="object-cover object-center"
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
        <div className="flex flex-row">
            {/* <Input
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-1/6 ml-3 mb-3 pl-2 pr-2 text-center"
            /> */}
            <Input 
            id= "quantity"
            value={quantity}
            type="number"
            onChange={handleQuantityChange}
            className="w-1/6 ml-3 mb-3 pl-2 pr-2 text-center"
            variant="standard" 
            label="Quantity" />
          <Button
            className="w-5/6 mr-3 mb-3 pl-4 pr-4"
            onClick={() =>
              addItem({ product_id: product.id, quantity: quantity }).then(() =>
                toggleCart(!open)
              )
            }
          >
            Add to cart
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default ProductDetails;
