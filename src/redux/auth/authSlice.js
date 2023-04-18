import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    user:null
}

const authSlice = createSlice(
    {
        name:"Auth",
        initialState,
        reducers:{
            login(state,action){
                console.log(action.payload);
                state.user = action.payload;
                console.log(state.user)
            },
            logout(state){
                state.user = false;
            }
        }
    }
)

export const authActions = authSlice.actions;
export default authSlice;