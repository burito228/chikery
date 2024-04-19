import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    price: [],
    ingridient: [],
    categories: [],
    order: ''
    // onlyFavorite: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPriceFilter: (state, action) => {
            return {...state, price: action.payload}
        },
        setIngridientFilter: (state, action) => {
            return {...state, ingridient: action.payload }
        },
        setCategoryFilter: (state, action) => {
            return {...state, categories: action.payload }
        },
        setDisplayOrder: (state, action) => {
            return {...state, order: action.payload}
        },
        // setOnlyFavoriteFilter: (state) => {
        //     return {...state, onlyFavorite: !state.onlyFavorite}
        // },
        resetFilters: () => {
            return initialState
        }
    }
})

export const { setPriceFilter, setIngridientFilter, resetFilters, setCategoryFilter, setDisplayOrder } = filterSlice.actions

export const selectPriceFilter = (state) => state.filter.price
export const selectCategoryFilter = (state) => state.filter.categories
export const selectIngridientFilter = (state) => state.filter.ingridient
export const selectDisplayOrder = (state) => state.filter.order

// export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer