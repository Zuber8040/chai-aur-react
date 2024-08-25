import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,

}

// to track authentication if user is authencated or not 

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
            login:(state,action)=>{
                state.status = true;
                state.userData = action.payload.userData

            },
            logout:(state)=>{
                state.status=false;
                state.userData= null 
            }
    }
})

export const {login,logout} = authSlice.actions;

export default authSlice.reducer
