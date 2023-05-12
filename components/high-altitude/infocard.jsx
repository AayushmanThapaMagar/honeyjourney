'use client'

import { Card } from "flowbite-react";
import { Typography} from "@material-tailwind/react";

export default function CardComponent() {
    return (
        <Card
        className="w-2/6 sm:h-64 2xl:h-96"
        >
            <Typography 
            variant="h2"
            color="blue-gray"
            className="flex flex-row items-center justify-center">
                High Altitude
            </Typography>
            <Typography color="blue-gray">
            Our mad honey is a rare and unique product, harvested from the remote cliffs of Lamjung, Nepal. 
            Located at an altitude of 3200 meters and above, these cliffs are home to a special species of 
            honeybees that produce a potent honey with hallucinogenic properties. 
            </Typography>
        </Card>
    )
}