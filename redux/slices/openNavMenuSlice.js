import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMenuOpened: false,
    isNavOpened: true,
    menuID: 0,
}

const openNavMenuSlice = createSlice({
    name:'menu',
    initialState,
    reducers: {
        openSubMenu(state, action) {
            const id = action.payload
            state.isMenuOpened = true;
            state.menuID = id;
            state.isNavOpened = false;
        },
        closeSubMenu(state) {
            state.isMenuOpened = false;
            state.isNavOpened = true;
        },
    }
})

export const { openSubMenu, closeSubMenu } = openNavMenuSlice.actions;

const openNavMenuReducer = openNavMenuSlice.reducer;

export default openNavMenuReducer;
