import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    price: 0,
    ingridient: '',
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
            return {...state, ingridient: 'sugar' }
        },
        // setOnlyFavoriteFilter: (state) => {
        //     return {...state, onlyFavorite: !state.onlyFavorite}
        // },
        resetFilters: () => {
            return initialState
        }
    }
})

export const { setPriceFilter, setIngridientFilter, resetFilters } = filterSlice.actions

export const selectPriceFilter = (state) => state.filter.price
export const selectIngridientFilter = (state) => state.filter.ingridient

// export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer