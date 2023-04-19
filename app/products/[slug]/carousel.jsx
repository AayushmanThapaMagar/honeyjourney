import Image from "next/image";

const Carousel = ({ product }) => {
  const imageUrl = product.images[0].file.url;
  console.log(imageUrl);
  return (
    <div className="relative w-full h-full">
      <div className="carousel-container" style={{ height: '500px' }}>
        <Image
          src={product.images[0].file.url}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Carousel;
