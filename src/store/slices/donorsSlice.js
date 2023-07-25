import {createSlice} from '@reduxjs/toolkit';
import { fetchDonors } from '../thunks/fetchDonors';
import {addDonors} from '../thunks/addDonors';
import { removeDonor } from '../thunks/removeDonor';
const donorsSlice=createSlice({
    name:'donation',
    initialState:{
        data:[],
        isLoading:false,
        error:null,
    },
    extraReducers(builder){
        builder.addCase(fetchDonors.pending,(state,action)=>{
            state.isLoading=true;
         });
         //request success
         builder.addCase(fetchDonors.fulfilled,(state,action)=>{
             state.isLoading=false;
             state.data=action.payload;
         });
         //request error
         builder.addCase(fetchDonors.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
         });
         builder.addCase(addDonors.pending,(state,action)=>{
            state.isLoading=true;
         });
         //request success
         builder.addCase(addDonors.fulfilled,(state,action)=>{
             state.isLoading=false;
             state.data.push(action.payload);
         });
         //request error
         builder.addCase(addDonors.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
         });
         builder.addCase(removeDonor.pending,(state,action)=>{
            state.isLoading=true;
         });
         //request success
         builder.addCase(removeDonor.fulfilled,(state,action)=>{
             state.isLoading=false;
             state.data=state.data.filter(donor=>{
                return donor.id!==action.payload.id;
             })
         });
         //request error
         builder.addCase(removeDonor.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
         });
    }
})
export const userDonors=donorsSlice.reducer;