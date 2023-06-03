'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'flowbite-react';

const FeaturedProducts = () => {
  const brandLogos = [
    'https://www.vicemediagroup.com/wp-content/uploads/2020/10/VICE_LOGO_BLACK-e1617894708861.png',
    'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Joe_Rogan_Experience_logo.jpg?20180113072414',
    'https://example.com/logo3.png',
    // Add more logo URLs here
  ];

  return (
    <div>

        <div>
        <Card className="bg-gray-100 w-4/6 overflow-hidden">
      <motion.div
        className="flex justify-center"
        animate={{ x: ['-100%', '0%', '100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand Logo"
            className="h-12 w-auto mx-4"
          />
        ))}
      </motion.div>
    </Card>
        </div>
    </div>
  );
};

export default FeaturedProducts;
