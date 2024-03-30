import {createSlice} from '@reduxjs/toolkit'
const initialState={
   currentUser:null,
   isLoading:false,
   error:false
}
const userSlice=createSlice({
name:'user',
initialState,
reducers:{
    loginStart:(state)=>{
        state.isLoading = true;
        state.error=false
    },
    loginSuccess:(state,action)=>{
        state.isLoading = false;
        state.currentUser = action.payload.data
        state.error=false
        
    },
    loginFailure:(state)=>{
        state.isLoading = false;
        state.error=true;
    }
}
})
export const {loginFailure,loginSuccess,loginStart}=userSlice.actions
export default userSlice.reducer