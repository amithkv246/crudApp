import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    passwordNotEmpty: false,
    showPassword: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        updatePasswordNotEmpty: (state, action) => {
            state.passwordNotEmpty = action.payload
        },
        updateShowPassword: (state, action) => {
            state.showPassword = action.payload
        },
    },
})

export const { updateIsLoggedIn, updatePasswordNotEmpty, updateShowPassword } = counterSlice.actions

export default counterSlice.reducer