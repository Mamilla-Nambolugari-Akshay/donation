import Donationform from "./donationpages/Donationform";
import Amount from "./donationpages/Amount";
import Deleteingrecord from "./donationpages/Deleteingrecord";
import Userslist from "./donationpages/Userslist";
import Donorslist from "./donationpages/Donorslist";
import {useState,useEffect} from 'react';
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import { FaUsersGear ,FaWpforms} from "react-icons/fa6";
import { useDispatch,useSelector } from "react-redux";
import { fetchDonors } from "./store";
function App(){
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchDonors())
  },[dispatch])
  const {data}=useSelector((state)=>{
    return state.donation;
  })
  const[search,searchterm]=useState('');
  const[handleDelete,sethandleDelete]=useState('');
  const[dataa,setDataa]=useState([]);
  const[deletedata,setdeletedata]=useState([]);
  const[donationform,OPENdonationform]=useState(true);
  const[amount,OPENamount]=useState(false);
  const[donors , OPENdonors]=useState(false);
  const[deleteingrecord,OPENdeleteingrecord]=useState(false);
  const[userslist,OPENuserslist]=useState(false);
  const[OPEN,CLOSE]=useState(1);
  const[amountdata,setamountdata]=useState([]);
  const[amountt,SetAmount]=useState('');
 const[opt,setOpt]=useState('equal');

  const handleOpen=(id)=>{
    CLOSE(id);
    if(parseInt(OPEN)===1){
      OPENdonationform(true);
      OPENdonors(false);
      OPENamount(false);
      OPENdeleteingrecord(false);
      OPENuserslist(false);
    }
    else if(parseInt(OPEN)===2){
      OPENdonors(true);
      OPENdonationform(false);
      OPENamount(false);
      OPENdeleteingrecord(false);
      OPENuserslist(false);
    }
    else if(parseInt(OPEN)===3){
      OPENamount(true);
      OPENdonationform(false);
      OPENdonors(false);
      OPENdeleteingrecord(false);
      OPENuserslist(false);
    }
    else if(parseInt(OPEN)===4){
      OPENdeleteingrecord(true);
      OPENdonationform(false);
      OPENdonors(false);
      OPENamount(false);
      OPENuserslist(false);
    }else{
      OPENuserslist(true);
      OPENdonationform(false);
      OPENdonors(false);
      OPENamount(false);
      OPENdeleteingrecord(false);
     
    }
  }
  const handleDeleteSearch=(event)=>{
    sethandleDelete(event.target.value)
  }
  const deleteSubmit=(event)=>{
    event.preventDefault();
    const term=handleDelete;
    const deletedata=data.filter((donor)=>{
      return donor.fname===term;
    })
   setdeletedata(deletedata)

  }
  const handleSearch=(event)=>{
    searchterm(event.target.value)
  }
  const searchSubmit=(event)=>{
    event.preventDefault();
    const term=search;
    const dataaa=data.filter((donor)=>{
      return donor.fname===term;
    })
   setDataa(dataaa)
  }
  const AmountCondition=(event)=>{
    SetAmount(event.target.value);
  }
  const handleAmountOption=(event)=>{
   setOpt(event.target.value);
  }
  const handleAmountFormSubmit=(event)=>{
    event.preventDefault();
    if(opt==="equal"){
      const amountdata=data.filter((donor)=>{
        let aa=parseInt(donor.amount);
        let am=parseInt(amountt)
        return aa <= am;
      })
      setamountdata(amountdata)
    }
    else if(opt==="great"){
      const amountdata=data.filter((donor)=>{
        let aa=parseInt(donor.amount);
        let am=parseInt(amountt)
        return am<aa;
      })
      setamountdata(amountdata)
    }
    else if(opt==="less"){
      const amountdata=data.filter((donor)=>{
        let aa=parseInt(donor.amount);
        let am=parseInt(amountt)
        return am<aa;
      })
      setamountdata(amountdata)
    }
    else if(opt==="greater"){
      const amountdata=data.filter((donor)=>{
        let aa=parseInt(donor.amount);
        let am=parseInt(amountt)
        return am>=aa;
      })
      setamountdata(amountdata)
    }
    else if(opt==="lesser"){
      const amountdata=data.filter((donor)=>{
        let aa=parseInt(donor.amount);
        let am=parseInt(amountt)
        return am<=aa;
      })
      setamountdata(amountdata)
    }
    else if(opt==="notequal"){
      const amountdata=data.filter((donor)=>{
        let aa=parseInt(donor.amount);
        let am=parseInt(amountt)
        return aa !== am;
      })
      setamountdata(amountdata)
    }
    else{
      console.error();
    }
   

  }

  return <div >
    <div className="pt-1 h-100 w-100 border border-2 bg-slate-500"> 
    <h1 className="font-bold text-4xl text-red-500 uppercase p-4 text-center">DONATION management</h1>
     <p className="text-center pb-2">Application for Donation Management</p>
    </div>
   
    <div className="flex flex-row text-slate-900 space-x-4 pr-6 pl-6 h-14 border border-2 justify-between rounded-full">
            
            <div className="p-3 font-bold uppercase" onClick={()=>handleOpen(1)}>{donationform&&<div className="shadow shadow-2xl"> Donation Form</div>} {donationform||<FaWpforms className="h-8 w-8 stroke-red-500 text-red-500"/>}</div>
            <div className="p-3 font-bold uppercase flex flex-row " onClick={()=>handleOpen(2)}>{donors&&<div className="shadow shadow-2xl"> Donors</div>}{donors||<FaUserSecret className="w-8 h-8 stroke-red-500 text-red-500" />} </div>
            <div className="p-3 font-bold uppercase" onClick={()=>handleOpen(3)}>{amount&&<div className="shadow shadow-2xl"> Amount</div>}{amount||<GiTakeMyMoney className="w-8 h-8 stroke-red-500 text-red-500"/>}</div>
            <div className="p-3 font-bold uppercase" onClick={()=>handleOpen(4)}>{deleteingrecord&&<div className="shadow shadow-2xl"> Delete</div>}{deleteingrecord||<TiUserDelete className="w-9 h-9 stroke-red-500 text-red-500"/>}</div>
            <div className="p-3 font-bold uppercase" onClick={()=>handleOpen(5)}>{userslist&&<div className="shadow shadow-2xl"> Usernames</div>}{userslist||<FaUsersGear className="w-9 h-9 stroke-red-500 text-red-500" />}</div>
     </div>
     <div>
      {donationform&&<Donationform />}
      {donors&&<Donorslist />}
      {amount&& <div className="pt-5">
        <form className="flex flex-col pl-4 pr-6 space-y-2 pt-5" onSubmit={handleAmountFormSubmit}> 
                    <label className="pl-1 font-bold"> Amount </label>
                    <input required value={amountt} onChange={AmountCondition} type="text" className=" border  border-slate-900 rounded-md border-2  shadow drop-shadow-xl pl-2 w-full h-12"/>
                    <label className="pl-1 font-bold"> Select Option</label>
                    <select onChange={handleAmountOption} defaultValue={opt} className=" border  border-slate-900 rounded-md border-2  shadow drop-shadow-xl pl-2 w-full h-12">
                        <option value="equal">Equal</option>
                        <option value="great">Great</option>
                        <option value="less">Less</option>
                        <option value="greater">GreaterThanequal</option>
                        <option value="lesser">LessThanEqual</option>
                        <option  vlaue="notequal">NotEqual</option>
                        
                    </select>
                    <div className="pt-10">
                    <button className="w-full h-12 bg-green-500 border border-2 rounded-full font-bold uppercase  text-2xl ">Submit</button>
                    </div>
            </form>
        </div>}
      {amount&&<Amount amountdata={amountdata}/>}
      {deleteingrecord&&<div className="pt-10">
                <form  onSubmit={ deleteSubmit}className="flex flex-col pl-4 pr-6 space-y-2">
                    <label className="pl-1 font-bold"> First_Name</label>
                    <input value={handleDelete} onChange={handleDeleteSearch} type="text" className=" border  border-slate-900 rounded-md border-2  shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    <div className="pt-10">
                    <button  className="w-full h-12 bg-green-500 border shadow shadow-inner shadow-xl border-2 rounded-full font-bold uppercase  text-2xl">Submit</button>
                   </div>
                   </form>
                </div>}
      {deleteingrecord&&<Deleteingrecord deletedata={deletedata}/>}
      {userslist&&<div className="pt-10">
                <form  onSubmit={ searchSubmit} className="flex flex-col pl-4 pr-6 space-y-2">
                    <label className="pl-1 font-bold"> First_Name</label>
                    <input value={search} onChange={handleSearch} type="text" className=" border  border-slate-900 rounded-md border-2  shadow drop-shadow-xl pl-2 w-full h-12" required/>
                    <div className="pt-10">
                    <button  className="w-full h-12 bg-green-500 border shadow shadow-inner shadow-xl border-2 rounded-full font-bold uppercase  text-2xl">Submit</button>
                   </div>
                   </form>
                </div>}
      {userslist&&<Userslist dataa={dataa}/>}
     </div>
              </div>
}
export default App;