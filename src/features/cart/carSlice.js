import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cartItems";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartItems,
        amount: 4,
        total: 0,
        isLoading: true
    },
    reducers: {
        clearCart: (state, action = null ) => {
            if (action.payload) {
                let newCartList = state.cartItems.filter(item => item.id != action.payload);
                state.cartItems = newCartList;
                state.amount = newCartList.length;
            } else {
                state.cartItems = [];
                state.amount = 0
            }
        },
    }
});

export const { clearCart } = cartSlice.actions;
export default cartSlice;
