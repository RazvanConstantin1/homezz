import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineChair } from "react-icons/md";
import { banners } from "../data/Data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    SlideToShow: 1,
    SlideToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };

  return (
    <div className="banner mt-12">
      <div className="w-10/12 m-auto ">
        <div className="flex justify-center items-center">
          <div className="mb-10 flex flex-col justify-center items-center sm:items-start text-3xl sm:text-5xl gap-2">
            <Link to={"/shop"} className="flex-col sm:flex-row items-center">
              <div className="text-white mr-4 common-hover text-2xl sm:text-4xl rounded-3xl h-12 w-20 grid place-items-center">
                <MdOutlineChair />
              </div>
            </Link>
            <div className="text-center sm:text-left">
              <p>Discover the perfect touch for your home with our furniture</p>
              <p>Handcrafted with passion by the best specialists</p>
            </div>

            <button>
              <Link
                to={"/shop"}
                className="text-white common-hover text-2xl sm:text-4xl ml-4 px-7 py-2 !rounded-3xl"
              >
                Shop Now
              </Link>
            </button>
          </div>
        </div>

        <div>
          <Slider {...settings}>
            {banners.map((item, index) => (
              <div key={index}>
                <img src={item.banner} alt="furniture image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
