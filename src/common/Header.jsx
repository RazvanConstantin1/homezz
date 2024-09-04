import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbar } from "../data/Data.js";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import SideBar from "../common/SideBar.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const [sticky, setSticky] = useState(false);

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
      <div
        className={`${
          sticky ? "header sticky py-4 top-0 z-50 shadow-xl" : ""
        } `}
      >
        <div className="w-10/12 m-auto flex flex-wrap justify-between items-center">
          <div>
            <Link to={"/"} className="logo">
              HomezZ
            </Link>
          </div>
          <div className="md:flex flex-wrap text-base py-3">
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
          <li className="flex flex-wrap">
            <Link className="mr-5 text-2xl">
              <HiOutlineHeart />
            </Link>
            <Link className="mr-5 text-2xl">
              <HiOutlineUser />
            </Link>
            <Link className="relative mr-5 text-2xl" onClick={toggleSidebar}>
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
