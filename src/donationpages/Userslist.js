function Userslist({dataa}){
    let sum=0
    const donorsrecords=dataa.map((donor)=>{
        sum=sum+parseInt(donor.amount)
        return <tr key={donor.fname} className="pt-6 border border-b-4 border-slate-400 shadow shadow-xl">
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
    <div className=" float-left text-xl font-bold"> Total Amount Rs {sum}</div>
    
    </div>
       
    )
}
export default Userslist;