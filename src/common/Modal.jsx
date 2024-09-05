import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  getCartTotal,
  updateQuantity,
} from "../slices/cartSlice.js";

const Modal = ({ isModalOpen, handleToggle, data }) => {
  const [qty, setQty] = useState(1);
  const [addedItemToCart, setAddedItemToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedItemToCart(true);
  };

  useEffect(() => {
    if (isModalOpen) {
    } else {
      setQty(1);
      setAddedItemToCart(false);
    }
  }, [isModalOpen]);

  const increaseQuantity = (itemId, correctQuantity) => {
    const newQty = correctQuantity + 1;
    setQty(newQty);

    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };
  const decreaseQuantity = (itemId, correctQuantity) => {
    const newQty = Math.max(correctQuantity - 1, 1);
    setQty(newQty);

    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-3/3 sm:w-2/3 relative bg-white overflow-hidden p-4">
            <span
              className="absolute cursor-pointer top-0 right-0 p-4"
              onClick={() => handleToggle()}
            >
              <FaTimes />
            </span>
            <div className="flex flex-col md:flex-row">
              <div>
                <div className="flash_sale_img">
                  <img src={data.img} alt="" />
                </div>
              </div>
              <div className="relative ml-6">
                <p className="mb-2 font-bold">{data.title}</p>
                <p className="text-red-600 text-xl">{data.price}$</p>
                <p className="my-2">{data.description}</p>
                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2">Shades: </p>
                  <select
                    name="shades"
                    id="Shades"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="option">Choose an option</option>
                    <option value="option">Choose an option 1</option>
                    <option value="option">Choose an option 2</option>
                    <option value="option">Choose an option 3</option>
                    <option value="option">Choose an option 4</option>
                    <option value="option">Choose an option 5</option>
                  </select>
                </div>
                <p className="text-green-700 m-0">In stock 400 pieces</p>
                <div className="flex-col md:flex-row items-center justify-center">
                  <div className="flex items-center gap-2 mr-3">
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus />
                    </button>
                    <span className="border mt-4 py-3 px-6 count">{qty}</span>
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>
                  <div className="addtocart mr-3">
                    {addedItemToCart ? (
                      <button className="border mt-4 py-3 px-6 text-white">
                        <Link to={"/cart"}>View Cart</Link>
                      </button>
                    ) : (
                      <button
                        className="border mt-4 py-3 px-6 text-white"
                        onClick={() => addItemToCart(data)}
                      >
                        <Link>Add To Cart</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
