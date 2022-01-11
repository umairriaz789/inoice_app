export default function Date({invoicenumber,date}){
    return(
        <>
         <article className="my-5 flex flex-col items-end justify-end">
           <ul>
             <li><span className="font-bold">Invoice Number:</span>{invoicenumber}</li>
             <li className="p-1"><span className="font-bold">Date:</span>{date}</li>
           </ul>
         </article>
        </>
    )
}