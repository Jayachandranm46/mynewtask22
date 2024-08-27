import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Signupitem:[]
    }

const Signupslice=createSlice({
    name:'Signupslice',
    initialState:initialState,
    reducers:{
        Signupdata:(state,action)=>{
            console.log('signup dat-->',action.payload)
            const item = action.payload;
            state.Signupitem.push(item)
    
        }
    }

})

export const {Signupdata}=Signupslice.actions
export  default Signupslice.reducer