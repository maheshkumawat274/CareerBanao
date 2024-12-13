import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface VideoCardProps {
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl }) => {
  return (
    <div className="p-5 pb-8">
      <div className="bg-white h-[300px] shadow-md rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const SliderYoutube: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const videos = [
    { videoUrl: "https://www.youtube.com/embed/Ako9mZC7uJE?si=gE6TORKwq7eFPFMh" },
    { videoUrl: "https://www.youtube.com/embed/cgJAwWfWW2g?si=PaqGlM9AN4APzSek" },
    { videoUrl: "https://www.youtube.com/embed/pvcrDGzVS28?si=ICIUWropT4GxdFW9" },
    { videoUrl: "https://www.youtube.com/embed/u9n4T7OcRjA?si=-VLrEUhJbfHtzUhy" },
    { videoUrl: "https://www.youtube.com/embed/u9n4T7OcRjA?si=-VLrEUhJbfHtzUhy" },
    { videoUrl: "https://www.youtube.com/embed/4ayOAtUHwZM?si=01eL-Lpn8wmaYACW" }
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins text-center mb-6 text-gray-800">
          YouTube Videos
        </h2>
        <Slider ref={sliderRef} {...sliderSettings}>
          {videos.map((video, index) => (
            <VideoCard key={index} videoUrl={video.videoUrl} />
          ))}
        </Slider>
      </div>
    </section>
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
      <BiChevronRight size={40} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-orange-400   top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white hover:scale-125 hover:text-slate-300 transition-transform duration-300 cursor-pointer z-10"
      onClick={onClick}
    >
      <BiChevronLeft size={40}/>
    </div>
  );
};

export default SliderYoutube;
