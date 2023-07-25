import { useDispatch } from 'react-redux';
import { removeDonor } from '../store';
function Deleteingrecord({deletedata}){
    const dispatch=useDispatch();
    const deleterecord=(donor)=>{
        dispatch(removeDonor(donor))
    }
    const donorsrecords=deletedata.map((donor)=>{
        return <tr key={donor.fname} className="pt-6 border border-b-4 border-slate-400 shadow shadow-xl">
            <td className='rounded-lg font-bold border bg-sky-500'><button  onClick={()=>deleterecord(donor)}>DELETE</button></td>
            <td className="border border-r-4 border-yellow-700 shadow shadow-inner w-10 h-2 shadow-white drop-shadow-lg" >{donor.fname}</td>
                    <td className=" border border-r-4 border-yellow-700 shadow shadow-inner shadow-white drop-shadow-lg" >{donor.lname}</td>
                    <td className="border border-r-4 border-yellow-700 shadow shadow-inner shadow-white drop-shadow-lg" >{donor.mail}</td>
                    <td className="border border-r-4 border-yellow-700 shadow shadow-inner shadow-white drop-shadow-lg" >{donor.contact}</td>
                    <td className="border border-r-4 border-yellow-700 shadow shadow-inner shadow-white drop-shadow-lg" >{donor.whatsapp}</td>
                     <td className="border border-r-4 border-yellow-700 shadow shadow-inner shadow-white drop-shadow-lg" >{donor.address}</td>
                     <td className="border border-r-4 border-yellow-700 shadow shadow-inner shadow-white drop-shadow-lg" >{donor.date}</td>
                     <td className="border border-r-4 border-yellow-700 shadow-inner shadow-white drop-shadow-lg" >{donor.pincode}</td>
                     <td className="border border-r-4 border-yellow-700 shadow shadow-inner drop-shadow-lg drop-shadow-lg" >{donor.amount}</td></tr>
    })
    return(
        <div>
            
            
        <div className="pt-10  w-full"><table className="w-full table-fixed" ><thead>
    
    <tr className="w-full">
      {donorsrecords}
    </tr></thead> </table>
    </div>
    </div>
       
    )
}
export default Deleteingrecord;