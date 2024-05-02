import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import dataSlice from "./slices/dataSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        filter: filterSlice,
        data: dataSlice,
    }
})

export default store