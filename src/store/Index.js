import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import chocolateSlice from "./choco-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {auth: authSlice.reducer, candy: chocolateSlice.reducer, ui: uiSlice.reducer}
})

export default store