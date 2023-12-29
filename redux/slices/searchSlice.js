import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpened: false,
};

const searchSlice = createSlice({
    name: 'searchSection',
    initialState,
    reducers: {
        openSearchBar(state) {
            state.isOpened = true;
        },
        closeSearchBar(state) {
            state.isOpened = false;
        },
        
    }
})

export const { openSearchBar, closeSearchBar } = searchSlice.actions;

const searchReducer = searchSlice.reducer;

export default searchReducer;