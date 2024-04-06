import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productSettings from "../../utils/productSettings";

const initialState = {
    products: [],
    isLoading: false,
}

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            thunkAPI.dispatch(error.message)
            throw error
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAddProduct: (state, action) => {
            state.products.push(action.payload)
        },
        setDeleteProduct: (state, action) => {
            return{
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            }
        },
        setToggleFavorite: (state, action) => {
            state.products.forEach((product) => {
                if(product.id === action.payload){
                    product.isFavorite = !product.isFavorite
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.products = []
            state.isLoading = true
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false
            action.payload.map((product) => {
                if(product.title && product.price){
                    state.products.push(productSettings(product))
                }
                return action.payload
            })
        })
        .addCase(fetchProduct.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const { setAddProduct, setDeleteProduct, setToggleFavorite } = productsSlice.actions

export const selectProducts = (state) => state.products.products
export const selectIsLoading = (state) => state.product.isLoading

export default productsSlice.reducer