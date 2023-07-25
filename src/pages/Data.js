import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDonors } from "../store";
import {Userslist} from "../donationpages/Userslist"
function Data(){
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(fetchDonors())
    });

    const {data}=useSelector((state)=>{
        return state.donation;
    })
    return <Userslist data={data} />
}
export default Data();