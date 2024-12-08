import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons for arrows

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
  const sliderRef = useRef<Slider | null>(null); // Create ref to access the Slider instance

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
    dots: false, // Removed dot navigation
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024, // Tablet or smaller
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // Mobile
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

      {/* Footer buttons */}
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center w-full space-x-4">
        <button
          className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition duration-300"
          onClick={() => sliderRef.current?.slickPrev()} // Trigger the slickPrev method
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-400 transition duration-300"
          onClick={() => sliderRef.current?.slickNext()} // Trigger the slickNext method
        >
          <FaArrowRight size={24} />
        </button>
      </div> */}
    </section>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-gray-800 hover:text-gray-500 cursor-pointer`}
      style={{ ...style, display: "block", right: "10px", zIndex: 50 }}
      onClick={onClick}
    >
      <FaArrowRight size={24} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-gray-800 hover:text-gray-500 cursor-pointer`}
      style={{ ...style, display: "block", left: "10px", zIndex: 50 }}
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );
};

export default SliderYoutube;
