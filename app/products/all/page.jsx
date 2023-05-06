import { getAllProducts} from "@/lib/swell/products";
import ProductCard from "@/components/products/productcard";

export default async function ProductPage() {
  const products = await getAllProducts();

  return (
    <div className="flex md:flex-row 
    md:items-center 
    md:justify-center 
    md:min-h-screen 
    md:py-2 
    md:gap-x-20
    flex-col
    gap-y-10
    py-2
    ">
      {products.reverse().map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}