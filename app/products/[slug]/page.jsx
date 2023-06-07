import { getAllProducts, getProductBySlug } from "@/lib/swell/products";
// import ProductDetails from "@/components/products/productdetails";
import ProductDetails from "@/components/products/productpage"

export async function generateStaticParams() {
    const products = await getAllProducts();

    return products.map((product) => ({
        slug: product.slug
    }));
}

export default async function ProductPage({ params }) {
    const product = await getProductBySlug(params.slug);


    return (
        <div className="w-screen h-screen">
            <ProductDetails product={product} />
        </div>
    )
}