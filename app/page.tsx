import Hero from "@/components/mainpage/hero";
import FeautredProducts from "@/components/mainpage/featured";
import Testimonials from "@/components/mainpage/testimonials";
import FeaturedOn from "@/components/mainpage/featuredon";
import { getAllProducts} from "@/lib/swell/products";


export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
    <Hero />
    <FeautredProducts products={products} />

    <Testimonials />
    <FeaturedOn />
    </>
  )
}
