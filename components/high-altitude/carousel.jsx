"use client";
import { Carousel } from "flowbite-react";


export default function CarouselComponent () {
    return (

<div className=" overflow-hidden w-3/6 sm:h-64 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="/images/cliff1.jpg"
      alt="Mad honey harvest"
    />
    <img
      src="/images/cliff2.jpg"
      alt="Nepal mad honey harvest"
    />
  </Carousel>
</div>
    )
}