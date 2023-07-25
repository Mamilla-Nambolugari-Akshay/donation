import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDonors=createAsyncThunk("donation/fetch",async()=>{
    const response=await axios.get('http://localhost:3015/donation');
    return response.data;
})
export {fetchDonors};