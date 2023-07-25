import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// const addDonors=createAsyncThunk('donation/add',async(fname,lname,mail,number,whatsapp,address,date,pincode,amount)=>{
    const addDonors=createAsyncThunk('donation/add',async(ffnames)=>{
   // console.log("values "+fname+" bb "+lname+" bb "+mail+" bb "+number+" bb "+whatsapp+" bb "+address+" bb "+date+" bb "+pincode+" bb "+amount);
    const total=ffnames.split("::")
   const response=await axios.post('http://localhost:3015/donation',{
        fname:total[0],
        lname:total[1],
        mail:total[2],
        contact:total[3],
        whatsapp:total[4],
        address:total[5],
        date:total[6],
        pincode:total[7],
        amount:total[8]

       
    })
    return response.data;
})
export {addDonors};