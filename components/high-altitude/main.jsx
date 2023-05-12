'use client';

import CarouselComponent from "./carousel";
import CardComponent from "./infocard";


export default function Hero() {
    return (
        <div
        className="flex flex-row items-center justify-center mt-20 gap-20"
        >
            <CarouselComponent />
            <CardComponent />
        </div>
    )
}