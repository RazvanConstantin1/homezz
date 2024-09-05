import React from "react";
import { NavLink } from "react-router-dom";
import { navbar } from "../data/Data.js";

const MobileNav = ({ mobileNav, handleMobileNav }) => {
  return (
    <div
      style={{ transform: `translateX(${mobileNav ? "0" : "-100%"})` }}
      className="block lg:hidden transition-transform duration-300 ease-in-out fixed left-0 top-20 w-[50dvh] h-[30dvh] z-50"
    >
      {mobileNav && (
        <div className=" bg-white flex flex-col justify-center items-center gap-4 py-20">
          {navbar.map((link, index) => {
            return (
              <div key={index} onClick={handleMobileNav} className="mr-8">
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
      )}
    </div>
  );
};

export default MobileNav;
