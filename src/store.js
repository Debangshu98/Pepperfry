import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
