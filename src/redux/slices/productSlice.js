import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productSettings from "../../utils/productSettings";

const initialState = {
    products: [],
    cart: [],
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
            state.products.forEach((product) => {
                if(product.id === action.payload){
                    const index = state.cart.findIndex(cartProduct => cartProduct.id === product.id);
                    if (index !== -1) {
                        state.cart[index].quantity += 1;
                    } else {
                        state.cart.push({...product, quantity: 1});
                    }
                }
            })
        },
        setToggleFavorite: (state, action) => {
            state.products.forEach((product) => {
                if(product.id === action.payload){
                    product.isFavorite = !product.isFavorite
                }
            })
        },
        setDeleteProduct: (state, action) => {
            return{
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        }
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
export const selectIsLoading = (state) => state.products.isLoading
export const selectCart = (state) => state.products.cart

export default productsSlice.reducer