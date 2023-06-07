"use client";
import { useState, useContext } from "react";
import { StorefrontContext } from "@/provider/storefront-provider";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductDetails({ product }) {
  //   const [images, setImages] = useState({
  //     img1: product.images[0].file.url,
  //     img2: product.images[1].file.url,
  //   });

  // const [activeImg, setActiveImg] = useState(images.img1);

  const { addItem, open, toggleCart, getCart } = useContext(StorefrontContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    addItem({ product_id: product.id, quantity: quantity }).then(() => {
      getCart();
      toggleCart(!open);
    });
  };

  return (
    // <div className="flex flex-row gap-16">
    <div className="lg:mx-28 lg:scroll-pb-7">
      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              className="object-cover cursor-pointer rounded-xl w-[600px] h-[600px]"
              src={product.images[0].file.url}
              alt={product.name}
            />
          </div>
        </div>
        <div className="md:hidden large-image">
          <img
            className="w-[100%] h-[300px] object-cover"
            src={product.images[0].file.url}
            alt={product.name}
          />
        </div>
        <div className="description p-6 md:basis-1/2 md:py-[40px]">
          <h1 className="text-3xl md:text-4xl capitalize font-[700]">
            {product.name}
          </h1>

          <div className="price flex items-center">
            <span className="text-2xl font-[600] mr-4">${product.price}</span>
          </div>

          <p
            className="hidden md:block text-darkGrayishBlue my-10 leading-7"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <p
            className="md:hidden text-darkGrayishBlue my-6 leading-7"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <div className="buttons-container flex flex-col md:flex-row mt-8">
            <div className="state w-[100%] flex justify-around md:justify-center items-center space-x-10 bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="minus text-[24px] md:text-[20px] font-[700] text-orange transition-all hover:opacity-50"
                disabled={quantity === 1}
              >
                -
              </button>
              <p className="md:text-[14px] font-bold"> {quantity} </p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="plus text-[24px] md:text-[20px] font-[700] text-orange transition-all hover:opacity-50"
              >
                +
              </button>
            </div>
            <button onClick={() => handleAddToCartClick()} className="add-btn border-none bg-orange rounded-lg text-white font-[700] px-[70px] py-[18px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50">
              <FaShoppingCart className="inline-block -translate-x-2 -translate-y-[2px] h-[15px]" />
              &nbsp;Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
