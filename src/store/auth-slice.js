import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        email: null,
        token: null,
        haveAccount: false
    },
    reducers: {
        login (state, action) {
            state.isAuthenticated = true
            state.email = action.payload.email
            state.token = action.payload.token
        },
        logout (state) {
            state.isAuthenticated = false
            state.email = null
            state.token = null
        },
        haveAccount (state) {
            state.haveAccount = !state.haveAccount
        }
    }
})

export const authActions = authSlice.actions

export default authSlice