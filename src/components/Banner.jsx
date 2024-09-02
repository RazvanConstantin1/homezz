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
    dots: false,
    infinite: true,
    speed: 500,
    SlideToShow: 1,
    SlideToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };

  return (
    <div className="banner">
      <div className="w-10/12 m-auto">
        <div>
          <div className="mb-10">
            <div className="header-text">
              <Link className="flex items-center">
                <div className="text-white mr-4 common-hover text-4xl rounded-3xl h-12 w-20 grid place-items-center">
                  <MdOutlineChair />
                </div>
                Elevate your lifestyle
              </Link>
              <p>with Our Furniture</p>
              Creations
              <Link className="text-white common-hover text-4xl ml-4 px-7 py-2 !rounded-3xl">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Slider {...settings}>
            {banners.map((item, index) => (
              <div key={index}>
                <img src={item.banner} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
