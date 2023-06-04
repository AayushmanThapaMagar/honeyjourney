'use client';


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
  } from "@material-tailwind/react";

  import { useContext} from "react";
  import { StorefrontContext } from "@/provider/storefront-provider";
   
  export default function ProductCard({ product }) {
    const { addItem, open, toggleCart, getCart  } = useContext(StorefrontContext);
    const handleAddToCartClick = () => {
        addItem({ product_id: product.id, quantity: 1}).then(() => {
          getCart();
          toggleCart(!open);
    
        });
      };

      
    return (
        
      <Card className="w-96 transition duration-300 ease-in-out transform md:hover:scale-105">
        <a href={`/products/${product.slug}`}>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img 
            src={product.images[0].file.url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </CardHeader>
        </a>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
            {product.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
            ${product.price}
            </Typography>
          </div>
          {/* <Typography variant="small" color="gray" className="font-normal opacity-75" dangerouslySetInnerHTML={{ __html: product.meta.description }}/> */}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
            onClick={() => handleAddToCartClick()}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }