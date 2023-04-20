'use client'

import {Card} from '@material-tailwind/react'

const ProductDetails = ({ product }) => {
  return (
<div className="mx-auto max-w-screen-md py-12">
<Card className="mb-12 overflow-hidden">
  <img
    alt={product.name}
    className="h-[32rem] w-full object-cover object-center"
    src={product.images[0].file.url}
  />
</Card>
</div>
  );
};

export default ProductDetails;

