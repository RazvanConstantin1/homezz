import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal, removeItem } from "../slices/cartSlice.js";

const SideBar = ({ isOpenSidebar, toggleSidebar }) => {
  const dispatch = useDispatch();

  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  const removeFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <div>
        <div
          style={{ transform: `translateX(${isOpenSidebar ? "0" : "100%"})` }}
          className="fixed right-0 bg-white shadow-lg h-full w-[50dvh] sm:w-[60dvh] p-4 transition-transform duration-300 ease-in-out overflow-y-auto z-50"
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

            {cartProducts.length === 0 ? (
              <div className="text-2xl font-bold p-4">Your cart is empty.</div>
            ) : (
              <div>
                {cartProducts.map((item, index) => (
                  <div key={index} className="flex justify-between mb-4">
                    <div className="flex">
                      <div className="relative">
                        <img
                          src={item.img}
                          alt="product img"
                          height={84}
                          width={84}
                        />
                        <span
                          className="absolute top-0 -mt-2 -ml-2 bg-red-500 text-white"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTimes />
                        </span>
                      </div>
                      <div>
                        <p>{item.title}</p>
                      </div>
                    </div>

                    <div>
                      <p>{item.price} $</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}

                <div className="flex p-6 items-center bg-black text-white w-full font-bold">
                  <h2>
                    Sub Total : <span>{totalAmount} $</span>
                  </h2>
                  <div className="ml-4 bg-white hover:bg-[#ffa832] py-3 sm:px-6 text-black cursor-pointer">
                    <Link to="/cart" className="p-2 ">
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
