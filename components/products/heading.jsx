'use client';

import { Typography } from "@material-tailwind/react";

export default function CustomHeading({text}) {
    return (
        <Typography
        variant = "h2"
        className = "flex flex-row items-center justify-center mt-20">
            {text}
        </Typography>
    )
}