import React from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageHeading from "../common/PageHeading.jsx";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
} from "../slices/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );
  const removeFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  };
  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
      dispatch(getCartTotal());
    }
  };

  return (
    <div>
      <PageHeading home={"Home"} pagename={"Cart"} />

      <div className="m-auto w-10/12">
        <div className="mt-8">
          {cartProducts.length === 0 ? (
            <h1 className="text-3xl font-bold">Your cart is empty</h1>
          ) : (
            <div>
              <div>
                <table className="w-full shadow-xl rounded-2xl">
                  <thead className="bg-blue-950 text-white font-semibold">
                    <tr>
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Product</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Sub Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartProducts.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-center px-4 py-2">
                            <span
                              className="cursor-pointer bg-rose-500 "
                              onClick={() => removeFromCart(item.id)}
                            >
                              <FaTimes />
                            </span>
                          </td>
                          <td className="text-center px-4 py-2">
                            <div className="flex">
                              <div>
                                <img
                                  src={item.img}
                                  alt="product img"
                                  className="h-40 w-40 object-contain mr-2"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">{item.title}</p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center px-4 py-2">
                            {item.price}$
                          </td>
                          <td className="text-center px-4 py-2">
                            <div
                              className="flex items-center gap-2 mr-3"
                              onClick={() =>
                                decreaseQuantity(item.id, item.quantity)
                              }
                            >
                              <button className="border mt-4 py-3 px-6">
                                <PiMinus />
                              </button>
                              <span className="border mt-4 py-3 px-6 count">
                                {item.quantity}
                              </span>
                              <button
                                className="border mt-4 py-3 px-6"
                                onClick={() =>
                                  increaseQuantity(item.id, item.quantity)
                                }
                              >
                                <PiPlus />
                              </button>
                            </div>
                          </td>
                          <td className="text-center px-4 py-2">
                            {item.price * item.quantity} $
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div className="p-6 w-2/5 bg-white shadow-2xl mt-4 rounded-2xl">
                  <h1 className="mb-4 text-center text-3xl">Cart Total</h1>
                  <h2 className="flex justify-between mt-3">
                    Sub Total: <span>{totalAmount}</span>
                  </h2>
                  <div className="flex justify-between mt-3">
                    Shipping Charge: <span>{10} $</span>
                  </div>
                  <div className="flex justify-between mt-3">
                    Grand Total: <span>{totalAmount + 10} $</span>
                  </div>
                  <div className="flex items-center whitespace-nowrap justify-between mt-4">
                    <div className="px-4 py-2 common-hover rounded-lg text-white cursor-pointer">
                      <div>Checkout</div>
                    </div>
                    <div>
                      <div className=" px-4 py-2 bg-black hover:bg-slate-800 rounded-lg text-white cursor-pointer">
                        <Link to={"/shop"}>Continue Shopping</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
