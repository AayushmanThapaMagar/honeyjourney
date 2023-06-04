'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      heading: 'Got that buzz',
      text:
        'Wanted to try ever since i saw it on JRE. The taste is definately different from regular honey. I tried it with tea and it got me wasted!',
      avatarSrc:
        'https://thispersondoesnotexist.xyz/img/3687.jpg',
      name: 'Rob K.',
      location: 'Coventry, UK',
    },
    {
      heading: 'Perfect for Winters',
      text:
        'Winters can be harsh in up here. I tried this honey and it was delicious. I felt a warm sensation in my throat and it was very soothing.. Definately recommend it!',
      avatarSrc:
        'https://thispersondoesnotexist.xyz/img/3776.jpg',
      name: 'Cassy O.',
      location: 'Quebec, Canada',
    },

    {
        heading: 'Real deal',
        text:
          'I was skeptical at first, since honey from other sellers didnt seem to work. But after trying it, I can say this is the real deal.',
        avatarSrc:
          'https://thispersondoesnotexist.xyz/img/3981.jpg',
        name: 'Kim S.',
        location: 'Incheon, South Korea',
      },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const controls = useAnimation();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      controls.start('visible');
      setAnimated(true);
    }
  }, [inView, animated, controls]);

  return (
    <div className="bg-gray-100 w-auto">
      <div className="container mx-auto py-16 ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p>Reviews from Customers Across the Globe</p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              ref={index === testimonials.length - 1 ? ref : null}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{
                delay: 0.4 + index * 0.2,
                duration: 0.6,
              }}
            >
              <div className="bg-white shadow-lg rounded-xl p-8 relative">
                <h3 className="text-xl font-medium mb-4">
                  {testimonial.heading}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {testimonial.text}
                </p>
                <div className="flex flex-col items-center mt-8">
                  <img
                    className="mb-2 rounded-full h-16 w-16"
                    src={testimonial.avatarSrc}
                    alt={testimonial.name}
                  />
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
