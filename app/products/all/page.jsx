import { getAllProducts} from "@/lib/swell/products";
import ProductCard from "@/components/products/productcard";
import CustomHeading from "@/components/products/heading"


export default async function ProductPage() {
  const products = await getAllProducts();

  return (
    <>
        <CustomHeading  text="Our Products 🐝" />
    <div className="flex md:flex-row 
    md:items-center 
    md:justify-center 
    md:mt-20
    md:gap-x-20
    flex-col
    gap-y-10
    py-2
    ">
      {products.reverse().map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
}