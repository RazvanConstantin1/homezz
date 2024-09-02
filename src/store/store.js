import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice.js";

const rootReducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
