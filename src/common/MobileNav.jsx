import React from "react";
import { NavLink } from "react-router-dom";
import { navbar } from "../data/Data.js";

const MobileNav = ({ mobileNav, handleMobileNav }) => {
  return (
    <div>
      {mobileNav && (
        <div className="absolute left-0 top-20 w-full h-[30dvh] bg-white flex flex-col items-center gap-4 pt-10 z-50">
          {navbar.map((link, index) => {
            return (
              <div key={index} className="mr-5" onClick={handleMobileNav}>
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
