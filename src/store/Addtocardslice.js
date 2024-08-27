import { createSlice } from "@reduxjs/toolkit";
const initialState={
    AddtoCardDate:[]
    }

const AddtoCard=createSlice({
    name:'Addtocard',
    initialState:initialState,
    reducers:{
        StoreData:(state,action)=>{
            const item = action.payload;
            console.log('action.payload-->',action.payload)
            const itemIndex = state.AddtoCardDate.findIndex(existingItem => existingItem.id === item.id);

            if (itemIndex === -1) {
                console.log('new data')
                state.AddtoCardDate.push(item);
            } else {
                console.log('old date')
                
                console.log('Item already exists in the cart:', item);
            }

        }
    }

})

export const {StoreData}=AddtoCard.actions
export  default AddtoCard.reducer