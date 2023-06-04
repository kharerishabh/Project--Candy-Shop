import { createSlice } from "@reduxjs/toolkit";

const initialChocolateState = {
    candyItem: [],
    totalAmount: 0,
    totalQuantity: 0,
    changed: false
}
const chocolateSlice = createSlice({
    name: 'candy',
    initialState: initialChocolateState,
    reducers: {
        fetchData(state, action){
            state.candyItem = action.payload.candyItem
            state.totalAmount = action.payload.totalAmount
            state.totalQuantity = action.payload.totalQuantity
        },
        add1(state, action) {
            console.log('added')
            state.changed = true
            state.candyItem.push(action.payload)
            state.totalAmount = state.totalAmount + action.payload.price * action.payload.quantity
            state.totalQuantity = state.totalQuantity + action.payload.quantity
        },
    }
})
export const chocolateAction = chocolateSlice.actions

export default chocolateSlice