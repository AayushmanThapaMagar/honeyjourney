'use client'

import {useEffect, useState} from "react";
import { swell } from "./init/client";
import { CartItem } from "swell-js/types/cart";

export const useCart = () => {
    const [cart, setCart] = useState<swell.Cart>()

    const addItem = async (item: CartItem) => {
        const cart = await swell.cart.addItem(item)
        // setCart(cart)
    }

    const removeItem = async (item: string) => {
        const cart = await swell.cart.removeItem(item);
    }

    const getCart = async () => {
        const cart = await swell.cart.get() || {}
        setCart(cart);
    }

    useEffect(() => {
        getCart();
    }, [])

    return { cart, addItem, removeItem, getCart}
}