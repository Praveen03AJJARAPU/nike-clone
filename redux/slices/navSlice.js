import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 enterNum: 0,
 isOpened: false,
};

const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers: {
        openMenu(state, id) {
                state.enterNum= id;
                state.isOpened = true;
        },
        closeMenu(state) {
            state.isOpened = false;
        }
    
    }
})

const navReducer = navSlice.reducer;
export const { openMenu, closeMenu } = navSlice.actions; 

export default navReducer;