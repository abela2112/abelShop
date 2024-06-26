import {createSlice} from '@reduxjs/toolkit'
const initialState={
    products:[],
    quantity:0,
    total:0
}
const cartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    addToCart:(state,action)=>{
        state.quantity+=1;
        state.products.push(action.payload);
        state.total+=action.payload.price*action.payload.quantity;
    }
}
})
export const {addToCart}=cartSlice.actions
export default cartSlice.reducer