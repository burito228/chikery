import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    lastName: '',
    adress: '',
    city: '',
    mail: '',
    phone: ''
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            return {...state, firstName: action.payload}
        },
        setLastName: (state, action) => {
            return {...state, lastName: action.payload}
        },
        setAdress: (state, action) => {
            return {...state, adress: action.payload}
        },
        setCity: (state, action) => {
            return {...state, city: action.payload}
        },
        setMail: (state, action) => {
            return {...state, mail: action.payload}
        },
        setPhone: (state, action) => {
            return {...state, phone: action.payload}
        },
    }
})

export const { setFirstName, setLastName, setAdress, setCity, setMail, setPhone } = dataSlice.actions

export const selectFirstName = (state) => state.data.firstName
export const selectLastName = (state) => state.data.lastName
export const selectAdress = (state) => state.data.adress
export const selectCity = (state) => state.data.city
export const selectMail = (state) => state.data.mail
export const selectPhone = (state) => state.data.phone


export default dataSlice.reducer