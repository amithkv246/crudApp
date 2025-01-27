import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    loginPassword: "",
    registerPassword: "",
    registerConPass: "",
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        updateLoginPassword: (state, action) => {
            state.loginPassword = action.payload
        },
        updateRegisterPassword: (state, action) => {
            state.registerPassword = action.payload
        },
        updateRegisterConPass: (state, action) => {
            state.registerConPass = action.payload
        },
    },
})

export const { updateIsLoggedIn, updateLoginPassword, updateRegisterPassword, updateRegisterConPass } = counterSlice.actions

export default counterSlice.reducer