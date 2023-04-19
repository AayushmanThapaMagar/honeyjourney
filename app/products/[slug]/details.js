'use client'
import { useContext } from "react"
import { StorefrontContext} from "@/provider/storefront-provider";
const Details = ({ product }) => {
    const { addItem } = useContext(StorefrontContext);
    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="mt-5 text-l md:text-xl text-bright-blue-900" dangerouslySetInnerHTML={{__html: product.description}} />
            <button type="button" onClick={() => addItem({product_id: product.id, quantity: 1})} 
            className="mt-5 bg-red-900 text-black text-lg font-bold rounded-md hover:bg-red-500">Add to cart</button>
            <p className="text-gray-500">{product.description}</p>
        </div>
    )
}

export default Details;