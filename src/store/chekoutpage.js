import { createSlice } from "@reduxjs/toolkit";
const initialState={
    checkoutdata:[]
    }

const Chekoutslice=createSlice({
    name:'checkout',
    initialState:initialState,
    reducers:{
        CheckoutData:(state,action)=>{
            const item = action.payload;
            console.log('new data forr->',action.payload)
            const itemIndex = state.checkoutdata.findIndex(existingItem => existingItem.id === item.id);

            if (itemIndex === -1) {
                console.log('new data for checkoutdata')
                state.checkoutdata.push(...item);
            } else {
                console.log('old date')
                
                console.log('Item already exists in the cart: for checkoutdata', item);
            }

        }
    }

})

export const {CheckoutData}=Chekoutslice.actions
export  default Chekoutslice.reducer