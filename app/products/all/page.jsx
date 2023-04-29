import { getAllProducts, getProductBySlug } from "@/lib/swell/products";
import ProductCard from "@/components/products/productcard";

export default async function ProductPage() {
    const products = await getAllProducts();

    return (
        <div>
            {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
        </div>
    )
}