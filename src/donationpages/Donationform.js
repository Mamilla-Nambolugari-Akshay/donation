import {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchDonors } from '../store';
import { addDonors } from '../store';

function Donationform(){
    const dispatch=useDispatch();
    const{isLoading,error}=useSelector((state)=>{
        return state.donation;
    })
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[mail,setMail]=useState('');
    const[number,setNumber]=useState('');
    const[whatsapp,setWhatsapp]=useState('');
    const[address,setAddress]=useState('');
    const[date,setDate]=useState('');
    const[pincode,setPincode]=useState('');
    const[amount,setAmount]=useState('');
    useEffect(()=>{
        dispatch(fetchDonors());
    },[dispatch])
    if(error){
        console.log("Error")
    }
    if(isLoading){
        console.log("loading")

    }
   const handlefname=(event)=>{
    setFname(event.target.value);
    
   }
   const handlelname=(event)=>{
    setLname(event.target.value);
 
   }
   const handlemail=(event)=>{
    setMail(event.target.value);

   }

   const handlenumber=(event)=>{
    setNumber(event.target.value);
   }
   const handlewhatsapp=(event)=>{
    setWhatsapp(event.target.value)
   }
   const handleaddress=(event)=>{
    setAddress(event.target.value)
   }
   const handledate=(event)=>{
    setDate(event.target.value)
   }
   const handlepincode=(event)=>{
    setPincode(event.target.value);
   }
   const handleamount=(event1)=>{
    setAmount(event1.target.value);
   }
   const hadleAddDonor=()=>{
    
    // dispatch(addDonors(fname,lname,mail,number,whatsapp,address,date,pincode,amount));
   }

    const handleclickdonors=(event)=>{
       
        event.preventDefault();
        const total=fname+"::"+lname+"::"+mail+"::"+number+"::"+whatsapp+"::"+address+"::"+date+"::"+pincode+"::"+amount;
    dispatch(addDonors(total));
         }
    return (
        <div>
            
            <div>
                <form onSubmit={handleclickdonors} className="flex flex-col pl-4 pr-6 space-y-2">
                    <label className="pl-1 font-bold"> First_Name</label>
                    <input onChange={handlefname} value={fname} type="text" className=" border  border-slate-900 rounded-md border-2  shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Last_Name</label>
                    <input onChange={handlelname} value={lname} type="text" className=" border  border-slate-900 rounded-md border-2  shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Email</label>
                    <input onChange={handlemail} value={mail} type="email" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Contact</label>
                    <input onChange={handlenumber} value={number} type="numbery" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Whats_App</label>
                    <input onChange={handlewhatsapp} value={whatsapp} type="text" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Address</label>
                    <input onChange={handleaddress} value={address} type="text" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                   
                    <label className="pl-1 font-bold"> Date</label>
                    <input onChange={handledate} value={date} type="date" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Pincode </label>
                    <input onChange={handlepincode} value={pincode} type="number" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    
                    <label className="pl-1 font-bold"> Amount </label>
                    <input onChange={handleamount} value={amount} type="number" className=" border  border-slate-900 rounded-md border-2 shadow drop-shadow-xl pl-2 w-full h-12" required/>
                   
                    <div className="pt-10">
                    <button onClick={hadleAddDonor} className="w-full h-12 bg-green-500 border border-2 rounded-full font-bold uppercase  text-2xl">Submit</button>
                   </div>
                </form>
                <div></div>
            </div>
            {/* <div>{data}</div> */}
        </div>
    )
}
export default Donationform;