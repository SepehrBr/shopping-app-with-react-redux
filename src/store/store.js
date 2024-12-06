import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/carSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});
