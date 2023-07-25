import { userDonors } from "./slices/donorsSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store=configureStore({
    reducer:{
        donation:userDonors
    }
})
export * from './thunks/fetchDonors';
export * from './thunks/addDonors';
export * from './thunks/removeDonor';