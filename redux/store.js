import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import mobileNavReducer from './slices/mobileNavSlice';
import openNavMenuReducer from './slices/openNavMenuSlice';
import cartReducer from './slices/cartSlice';
import listReducer from './slices/hoverList';
import searchReducer from './slices/searchSlice';


const store = configureStore({
    reducer: {
        nav: navReducer,
        mobileNav: mobileNavReducer,
        subMenu: openNavMenuReducer,
        cart: cartReducer,
        list: listReducer,
        search: searchReducer,
    }
}) 

export default store;