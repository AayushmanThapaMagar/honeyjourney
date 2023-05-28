'use client';

import CarouselComponent from "./carousel";
import CardComponent from "./infocard";
import FeautredProducts from "../products/featured";

export default function MainCarasouelComponent() {
    return (
        <div
        className="flex flex-row items-center justify-center mt-20 gap-20"
        >
            <CarouselComponent />
            <CardComponent />
        </div>
    )
}