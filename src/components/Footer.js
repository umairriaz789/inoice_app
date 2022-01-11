export default function Footer({accountentName, phone, accountentAddress}){
    return(
        <>
        <footer className="footer border-t-2 border-gray-300 pt-5">
         <ul className="flex flex-wrap items-center justify-between">
           <li><span className="font-bold">Your Name:</span> {accountentName}</li>
           <li><span className="font-bold"> Phone Number:</span> {phone}</li>
           <li><span className="font-bold">Address:</span>  {accountentAddress}</li>
         </ul>
         </footer>
        </>
    )
}