import React from "react";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ isOpenSidebar, toggleSidebar }) => {
  return (
    <div>
      <div>
        <div
          style={{ transform: `translateX(${isOpenSidebar ? "0" : "100%"})` }}
          className="fixed right-0 bg-white shadow-lg h-full transition-transform duration-300 ease-in-out overflow-y-auto z-50"
        >
          <div className="border-b mb-4">
            <h1 className="text-3xl p-4">Your Cart</h1>
          </div>

          <div>
            <span
              className="absolute top-0 right-0 p-4"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </span>

            <div className="text-2xl font-bold p-4">Your cart is empty.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
