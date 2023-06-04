"use client"

import { Typography, Button } from "@material-tailwind/react";

export default function Hero() {
  return (

<div
  className="flex flex-row h-screen x-overflow-hidden"
  style={{
    backgroundImage: `url("/images/1.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
    <div 
    className="w-1/2 h-screen flex flex-col justify-center items-center pb-36"
    >
    <div className="md:pl-20">
    <Typography color="amber" variant="h1">Mad Honey</Typography>
        <Typography color="white" variant="h3">From The Himalayas</Typography>
        <div
        className="pt-10"
        >
    <Typography color="white" variant="paragraph">Discover the true essence of pure,
        </Typography>
        <Typography color="white" variant="paragraph">unadulterated bliss with each spoonful of our extraordinary mad honey.</Typography>
        <Typography color="white" variant="paragraph">From the remote cliffs of Nepal, right to your doorstep!</Typography>
    </div>
    <div>
    <Button
    color = "amber"
    className="mt-10"

    onClick={() => window.location.href="/products/all"}
    >
        Shop Now
    </Button>
    </div>
    </div>
    </div>
    
</div>
  );
}

