import MainCarasouelComponent from "@/components/high-altitude/main";
import MainHero from "@/components/hero/main";
import FeautredProducts from "@/components/products/featured";
import { getAllProducts} from "@/lib/swell/products";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
    <MainHero />
    <FeautredProducts products={products} />
    <MainCarasouelComponent />
    </>
  )
}
