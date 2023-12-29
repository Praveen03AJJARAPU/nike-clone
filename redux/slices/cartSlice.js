import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arr: [],
    cartMessage: false,
    items: 0,
    flag : true,
    subTotal: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            state.flag = false;
            const { id } = payload.product;
            const size  = payload.size;
            const find = state.arr.find((product) => product.id === id);
            state.items += 1
            if(find) {
                state.arr =  state.arr.map((item) => item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item);
            } else {
                state.flag = true;    
                state.arr.push({...payload, quantity: 1, size: size });
            }
            state.subTotal += payload.product.price;
        },
        addQuantity(state, {payload}) {
            const id = {payload};
            const quantity = {payload};
            state.arr = state.arr.map((item) => item.id === id ? {
                
            } : item);
        },
        clear(state) {
            state.arr = [];
        },
        setCartMessage(state, {payload}) {
            state.cartMessage = true;
        },
        decrement(state, {payload}) {
            state.arr = state.arr.filter((item) => item.id !== payload)
        }
    }
})
//  change state variable to redux container.
export const { addToCart, clear, decrement } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;