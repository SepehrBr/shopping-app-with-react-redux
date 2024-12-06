import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./cartItems";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartItems,
        amount: 3,
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
        addItem: (state, { payload }) => {
            state.cartItems.map(item => {
                if (item.id == payload.id) {
                    item.amount += 1;
                    state.amount += 1;
                }
            })
        },
        removeItem: (state, { payload }) => {
            state.cartItems.map(item => {
                if (item.amount > 1) {
                    if (item.id == payload.id) {
                        item.amount -= 1;
                        state.amount -= 1;
                    }
                }
            })
        },

    }
});

export const { clearCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice;
