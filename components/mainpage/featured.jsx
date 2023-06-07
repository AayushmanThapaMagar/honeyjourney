'use client';

import React from 'react';
import { Typography } from "@material-tailwind/react";
import ProductCard from "../products/productcard";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function FeaturedProducts({ products }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="w-full h-auto flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(249, 248, 245)",
        overflow: "hidden",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.25 }} // Adjust the duration value for slower animations
        className="py-20"
      >
        <Typography color="gray" className="text-center text-4xl font-bold">
          Featured Products
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }} // Adjust the duration value for slower animations
        className="flex flex-wrap justify-center gap-14 md:pb-20"
      >
        {products.reverse().map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }} // Adjust the duration value for slower animations
            className="flex-shrink-1 sm:scale-75"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
