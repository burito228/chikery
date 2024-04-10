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
        setLoadingWithoutDelay: (state, action) => {
            state.isLoading = action.payload
        },
        setLoadingWithDelay: (state, action) => {
            state.isLoading = action.payload
        },
        setDeleteProduct: (state, action) => {
            return{
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        },
        setToggleFavorite: (state, action) => {
            state.products.forEach((product) => {
                if(product.id === action.payload){
                    product.isFavorite = !product.isFavorite
                }
            })
        },
        setIncrementQuantity: (state, action) => {
            state.cart = state.cart.map((product) => {
               return product.id === action.payload ? {...product, quantity: ++product.quantity} : product
            })
        },
        setDecrementQuantity: (state, action) => {
            state.cart = state.cart.map((product) => {
                return product.id === action.payload ? {...product, quantity: product.quantity > 1 ? --product.quantity : 1} : product
            })
        },
        setClearCart: (state) => {
            state.cart = []
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.products = []
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
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

export const { setAddProduct, setDeleteProduct, setToggleFavorite, setIncrementQuantity, setDecrementQuantity, setLoadingWithDelay, setLoadingWithoutDelay, setClearCart } = productsSlice.actions

export const selectProducts = (state) => state.products.products
export const selectIsLoading = (state) => state.products.isLoading
export const selectCart = (state) => state.products.cart

export default productsSlice.reducer