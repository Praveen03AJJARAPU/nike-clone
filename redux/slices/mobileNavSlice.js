import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpened: false };

const mobileNavSlice = createSlice({
    name: 'mobileNav',
    initialState,
    reducers: {
        openNav(state) {
            state.isOpened = true;
        },
        closeNav(state) {
            state.isOpened = false;
        }
    }
})

const mobileNavReducer = mobileNavSlice.reducer;
export const { openNav, closeNav } = mobileNavSlice.actions;

export default mobileNavReducer;