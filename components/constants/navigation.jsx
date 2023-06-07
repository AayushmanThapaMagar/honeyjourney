"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { StorefrontContext } from "@/provider/storefront-provider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

import LogoSVG from "./logo";

export default function Navigation() {
  const { cart, open, toggleCart } = useContext(StorefrontContext);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
           <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="/products/all" className="flex items-center">
          Products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar 
      style={{ backgroundColor: 'rgb(35, 31, 30)' }}
      className="h-max max-w-full lg:px-8 rounded-none bg-slate-900 border-transparent">
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Honey Journey
          </Typography> */}

          <a

          className="mr-4 cursor-pointer"
          href="/"
          >
            <LogoSVG class="w-12 h-12" />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            {/* <AnimatePresence> */}
                {/* <motion.Button */}
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={() => toggleCart(!open)}
                  transition={{
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                  }}
                  exit={{ x: 50 }}
                >
                  <div
                  className="flex flex-row justify-between items-center"
                  > <FaShoppingCart className="mr-1"/> {cart?.item_quantity}</div>
            </IconButton>
                {/* </motion.Button> */}
            {/* </AnimatePresence> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav 
        className="mt-0"
        open={openNav}>
          {navList}
          {/* <Button 
          onClick={() => toggleCart(!open)}
          variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Open Cart</span>
          </Button> */}
        </MobileNav>
      </Navbar>
    </>
  );
}
