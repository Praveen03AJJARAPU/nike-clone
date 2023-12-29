import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpened: false,
    clickOpen: false,
    openList: 0,
};

const hoverListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        openList(state) {
            state.isOpened = true;
        },
        closeList(state) {
            state.isOpened = false;
        },
        mobileOpenList(state, {payload}) {
            const id  = payload;
            state.clickOpen = !state.clickOpen
            state.openList = id;
        },
        
    }
})

export const { openList, closeList, mobileCloseList, mobileOpenList } = hoverListSlice.actions;

const listReducer = hoverListSlice.reducer;

export default listReducer;