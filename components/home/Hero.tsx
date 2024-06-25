import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import Home from "../../assets/img/21.png";
import Link from "next/link";
// import SliderArrows from "../common/SliderArrows";
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
    <div id="hero" className="relative">
      <Slider ref={slider} {...settings}>
        <div>
          <div className="grid items-center grid-cols-12 p-12 bg-darkBg">
            <div className="col-span-12 pl-8 sm:col-span-12 md:col-span-12 lg:col-span-6">
              <div className="flex items-center gap-2 icon">
                <i className="fa-solid fa-house-chimney text-darkGold"></i>
                <span className="text-sm slide-title animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="my-8 font-semibold slick-title">
                <h1>Find Your Dream House By Us</h1>
              </div>
              <div className="px-4 my-4 border-l-2 border-gray-300 slick-description text-slate-500">
                <p className="pr-0 text-sm leading-8 md:pr-36 lg:pr-36">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quis, voluptas? Lorem ipsum dolor sit.
                </p>
              </div>
              <div className="mt-16 slick-button">
                <Link
                  href={"/contact"}
                  className="p-3 text-white transition-all rounded hover:bg-slate-800 hover:cursor-pointer bg-darkGold"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
            <div className="hidden col-span-12 mt-20 md:mt-20 lg:mt-0 sm:col-span-12 md:col-span-12 lg:col-span-6 md:block">
              <Image src={Home} alt="Loading..." />
            </div>
          </div>
        </div>
        <div>
          <div className="grid items-center grid-cols-12 p-12 bg-slate-100">
            <div className="hidden mb-16 lg:my-0 md:block sm:col-span-12 md:col-span-12 lg:col-span-6">
              <Image src={Home} alt="Loading..." />
            </div>
            <div className="col-span-12 pr-8 sm:col-span-12 md:col-span-12 lg:col-span-6">
              <div className="flex items-center justify-end gap-2 icon">
                <i className="fa-solid fa-house-chimney text-darkGold"></i>
                <span className="text-sm slide-title animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="my-8 font-semibold slick-title text-end">
                <h1>Find Your Dream House By Us</h1>
              </div>
              <div className="px-4 my-4 border-r-2 border-gray-300 slick-description text-slate-500">
                <p className="pl-10 pr-0 text-sm leading-8 md:pl-36 lg:pl-36">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quis, voluptas? Lorem ipsum dolor sit.
                </p>
              </div>
              <div className="mt-16 slick-button text-end">
                <Link
                  href={"/contact"}
                  className="p-3 text-white transition-all rounded hover:bg-slate-800 hover:cursor-pointer bg-darkGold"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid items-center grid-cols-12 p-12 bg-slate-100">
            <div className="col-span-12 pl-8 sm:col-span-12 md:col-span-12 lg:col-span-6">
              <div className="flex items-center gap-2 icon">
                <i className="fa-solid fa-house-chimney text-darkGold"></i>
                <span className="text-sm slide-title animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="my-8 font-semibold slick-title">
                <h1>Find Your Dream House By Us</h1>
              </div>
              <div className="px-4 my-4 border-l-2 border-gray-300 slick-description text-slate-500">
                <p className="pr-0 text-sm leading-8 md:pr-36 lg:pr-36">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quis, voluptas? Lorem ipsum dolor sit.
                </p>
              </div>
              <div className="mt-16 slick-button">
                <Link
                  href={"/contact"}
                  className="p-3 text-white transition-all rounded hover:bg-slate-800 hover:cursor-pointer bg-darkGold"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
            <div className="hidden col-span-12 mt-20 md:mt-20 lg:mt-0 sm:col-span-12 md:col-span-12 lg:col-span-6 md:block">
              <Image src={Home} alt="Loading..." />
            </div>
          </div>
        </div>
      </Slider>
      {/* <SliderArrows slider={slider} top="top-2/4" /> */}
      <SearchProperty />
    </div>
  );
};

export default Hero;
