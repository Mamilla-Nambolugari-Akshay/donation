import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const removeDonor=createAsyncThunk("donation/remove",async(donor)=>{
    await axios.delete(`http://localhost:3015/donation/${donor.id}`);
    return donor;
})
export {removeDonor};