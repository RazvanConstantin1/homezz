import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { products } from "../data/Data";

import Heading from "../common/Heading.jsx";
import Modal from "../common/Modal.jsx";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading />
        <div className="grid grid-cols-4 gap-3">
          {products.map((item, index) => (
            <div key={index} className="mt-8">
              <div className="overflow-hidden relative">
                <div className="image-container relative">
                  <div className="rounded-3xl">
                    <img
                      src={item.img}
                      alt="product img"
                      className="rounded-3xl"
                    />
                  </div>

                  <div className="absolute top-0 right-0 m-4 opacity-0">
                    <div className="bg-white p-4 rounded-full mb-2">
                      <IoMdHeartEmpty />
                    </div>
                    <div className="bg-white p-4 rounded-full mb-2">
                      <IoMdSearch />
                    </div>
                  </div>

                  <div className="absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl opacity-0">
                    <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                      <button
                        className="text-2xl"
                        onClick={() => handleOpen(item.id)}
                      >
                        <BiCart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default FlashSale;
