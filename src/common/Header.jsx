import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbar } from "../data/Data.js";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import SideBar from "../common/SideBar.jsx";
import { useSelector } from "react-redux";
import MobileNav from "./NavMobile.jsx";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <MobileNav mobileNav={mobileNav} handleMobileNav={handleMobileNav} />

      <div
        className={`${
          sticky ? "header sticky py-4 top-0 z-50 shadow-xl" : ""
        } `}
      >
        <div className=" w-full md:w-10/12 m-auto flex flex-wrap justify-between items-center py-4 px-6">
          <div className="block lg:hidden relative" onClick={handleMobileNav}>
            <GiHamburgerMenu className="w-[2em] h-[3em]" />
          </div>

          <div>
            <Link to={"/"} className="logo">
              HomezZ
            </Link>
          </div>
          <div className="lg:flex flex-wrap text-base py-3 hidden">
            {navbar.map((link, index) => {
              return (
                <div key={index} className="mr-5">
                  <NavLink
                    to={link.path}
                    className="p-2 link-hover transition-all text-xl"
                  >
                    {link.nav}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <li className="flex flex-wrap gap-2">
            <Link className="text-2xl">
              <HiOutlineHeart />
            </Link>
            <Link className="text-2xl">
              <HiOutlineUser />
            </Link>
            <Link className="relative text-2xl" onClick={toggleSidebar}>
              <MdOutlineShoppingBag />

              <div className="items_count">
                <span className="text-white">{totalItems}</span>
              </div>
            </Link>
          </li>
        </div>
      </div>
      <div>
        <SideBar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Header;
