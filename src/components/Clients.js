export default function Clients({clientName,clientAddress}){
    return(
        <>
         <section className="mt-10">
           <h2 className="font-bold text-2xl uppercase mb-1">{clientName}</h2>
           <p>{clientAddress}</p>
         </section>
        </>
    )
}