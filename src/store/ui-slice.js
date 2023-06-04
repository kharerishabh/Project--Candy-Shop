import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {show: false},
    reducers: {
        handleShow(state) {
            state.show = !state.show
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice