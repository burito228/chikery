import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        filter: filterSlice,
    }
})

export default store