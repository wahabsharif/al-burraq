import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Home from "../../assets/img/21.png";
import Link from "next/link";
import SearchProperty from "./SearchProperty";

const Hero = () => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: false,
    autoplay: false,
    arrows: false,
  };

  return (
    <div className="relative left-0 right-0 p-4 mx-auto rounded-lg sm:p-6 md:p-10 bg-slate-800 width-90">
      <Slider ref={slider} {...settings}>
        <div>
          <div className="grid items-center grid-cols-1 p-4 rounded-lg lg:grid-cols-2 sm:p-6 md:p-12 bg-slate-800">
            <div className="order-2 lg:order-1 ">
              <div className="flex items-center order-1 gap-2 mt-4 icon lg:order-none">
                <i className="fa-solid fa-house-chimney text-darkGold"></i>
                <span className="text-sm slide-title text-lightGold animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="order-2 my-8 font-semibold slick-title lg:order-none">
                <h1 className="text-3xl md:text-4xl">
                  Find Your Dream House By Us
                </h1>
              </div>
              <div className="order-4 px-4 my-4 border-l-2 border-gray-300 slick-description text-slate-500 lg:order-none">
                <p className="pr-0 text-sm leading-8 text-lightGold md:pr-36 lg:pr-24">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quis, voluptas? Lorem ipsum dolor sit.
                </p>
              </div>
              <div className="order-5 mt-8 sm:mb-20 lg:mt-16 slick-button lg:order-none">
                <Link
                  href="/contact"
                  className="p-3 text-white transition-all rounded hover:bg-slate-700 hover:cursor-pointer bg-darkGold"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
            <div className="order-1 mt-8 lg:order-2 lg:mt-0">
              <Image src={Home} alt="Loading..." className="w-full h-auto" />
            </div>
          </div>
        </div>
      </Slider>
      <SearchProperty />
    </div>
  );
};

export default Hero;
