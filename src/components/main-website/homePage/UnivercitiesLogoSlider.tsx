import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CardProps {
  logoUrl: string; // Assuming the logo is an image
}

const Card: React.FC<CardProps> = ({ logoUrl }) => {
  return (
    <div className="p-5 pb-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full h-48 flex justify-center items-center">
          <img
            className="max-w-full max-h-full object-contain"
            src={logoUrl}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-orange-400  top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white hover:scale-125 hover:text-slate-300 transition-transform duration-300 cursor-pointer z-10"
      onClick={onClick}
    >
      <BiChevronRight size={30} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-orange-400  top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white hover:scale-125 hover:text-slate-300 transition-transform duration-300 cursor-pointer z-10"
      onClick={onClick}
    >
      <BiChevronLeft size={30}/>
    </div>
  );
};

const UnivercitiesLogoSlider: React.FC = () => {
  const cards = [
    { logoUrl: "./logo/Quantum_logo.png" },
    { logoUrl: "./logo/1631180032phpvUgTqj.jpeg" },
    { logoUrl: "./logo/images.png" },
    { logoUrl: "./logo/products.png" },
    { logoUrl: "./logo/Slide80.jpeg" },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 bg-[#EDEDE9] relative">
      <h2 className="text-center font-poppins text-3xl">
        Top Ranked Institutes & Universities
      </h2>
      <div className="container mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index} logoUrl={card.logoUrl} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UnivercitiesLogoSlider;
