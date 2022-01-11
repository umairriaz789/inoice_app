import {useState, useRef} from "react"
import Footer from "./components/Footer"
import Note from "./components/Note"
import Tableform from "./components/Tableform"
import Header from "./components/Header";
import Date from "./components/Date"
import Clients from "./components/Clients";
import Details from "./components/Details";
import Table from "./components/Table";
import ReactToPrint from "react-to-print"

function App() {
  const [showInvoice, setshowInvoice] = useState(false)
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")
  const [clientName, setclientName] = useState("")
  const [clientAddress, setclientAddress] = useState("")
  const [invoicenumber, setinvoicenumber] = useState("")
  const [date, setdate] = useState("")
  const [note, setnote] = useState("")
  const [accountentName, setaccountentName] = useState("")
  const [accountentAddress, setaccountentAddress] = useState("")
  const [description,setdescription]=useState("")
  const [Quantity,setQuantity]=useState("")
  const [price,setprice]=useState("")
  const [amount,setamount]=useState("")
  const [list,setlist]=useState([])
  const [total,settotal]=useState(0)
  const componentRef=useRef()



  
  return (
    <>
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
    {showInvoice ? (
      <>
      <ReactToPrint trigger={()=> <button className="bg-gray-500 ml-5 text-white 
          font-bold py-1 px-4 rounded shadow border-2 border-gray-500 hover:bg-transparent
          hover:text-gray-500 transition-all duration-300">Print</button>}
      content={()=> componentRef.current}
    />
      <div ref={componentRef} className="p-5">
    <Header/>
    <Details name={name}  address={address}/>
    <Clients clientAddress={clientAddress} clientName={clientName} />
    <Date invoicenumber={invoicenumber} date={date}/>
    <Table description={description}  Quantity={Quantity} price={price} amount={amount} list={list} setlist={setlist} total={total} settotal={settotal}/>
    <Note  note={note}/>
    <Footer accountentName={accountentName}  phone={phone}  accountentAddress={accountentAddress}/>
    

    </div>

    <button onClick={()=> setshowInvoice(false)} className=" mt-5 bg-blue-400 text-white 
      font-bold py-2 px-7 rounded shadow border-2 border-blue-400 hover:bg-transparent
       hover:text-blue-400 transition-all duration-200">Edit</button>
      </>
    )
     :(
      <>
      <div>
        <h1 className=" text-center font-bold text-xl uppercase md:text-4xl py-5">INVOIVE FORM </h1>
      </div>
      {/* name, address,phone,client name, client address, invoice number,date, note*/}
      <div className="flex flex-col justify-center">
      <article className="md:grid grid-cols-2 gap-10">
      <div className="flex flex-col">
      <label htmlFor="name">Enter Your Name</label>
      <input type="text" name="text" id="name" placeholder="Enter your Name" autoComplete="off"
      value={name}
      onChange={(e)=> setname(e.target.value)}
      />
      </div>

      <div className="flex flex-col">
      <label htmlFor="address">Enter Your Adress</label>
      <input type="text" name="address" id="address" placeholder="Enter your Address" autoComplete="off"
      value={address}
      onChange={(e)=> setaddress(e.target.value)}
      />
      </div>
      </article>
      <article className="md:grid grid-cols-2 gap-10  md:mt-10">
        <div className="flex flex-col">
        <label htmlFor="clientName">Enter Your client Name</label>
        <input type="text" name="text" id="clientName" placeholder="Enter your client Name" autoComplete="off"
        value={clientName}
        onChange={(e)=> setclientName(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="clientAddress">Enter Your client Address</label>
        <input type="text" name="address" id="clientAddress" placeholder="Enter your client Address" autoComplete="off"
        value={clientAddress}
        onChange={(e)=> setclientAddress(e.target.value)}
        />
        </div>
      </article>

      <article className="md:grid grid-cols-2 gap-10  md:mt-10">
      <div className="flex flex-col">
      <label htmlFor="invoicenumber">Enter Your Invoice Number</label>
      <input type="number" name="text" id="invoicenumber" placeholder="Enter your Invoice Number" autoComplete="off"
      value={invoicenumber}
      onChange={(e)=> setinvoicenumber(e.target.value)}
      />
      </div>
      <div className="flex flex-col">
      <label htmlFor="date">Enter Date</label>
      <input type="date" name="date" id="date" placeholder="Enter Date" autoComplete="off"
      value={date}
      onChange={(e)=> setdate(e.target.value)}
      />
      </div>
      </article>


      <article className="md:grid grid-cols-3 gap-10 md:mt-10">
        <div className="flex flex-col">
        <label htmlFor="accountentName">Accountent Name</label>
        <input type="text" name="text" id="accountentName" placeholder="Accountent Name" autoComplete="off"
        value={accountentName}
        onChange={(e)=> setaccountentName(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="phone">Enter Your Phone Number</label>
        <input type="tel" name="phone" id="phone" placeholder="Enter your Phone Number" autoComplete="off"
        value={phone}
        onChange={(e)=> setphone(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="accountentAddress">Shop Address</label>
        <input type="text" name="address" id="accountentAddress" placeholder="Shop Address" autoComplete="off"
        value={accountentAddress}
        onChange={(e)=> setaccountentAddress(e.target.value)}
        />
        </div>
      </article>
       <article className="md:grid grid-cols-1 gap-10 md:mt-10">
       <Tableform description={description} setdescription={setdescription} 
       Quantity={Quantity} setQuantity={setQuantity} price={price} 
       setprice={setprice} amount={amount} setamount={setamount} list={list} setlist={setlist} total={total} settotal={settotal}/>
       </article>
       

      

      <label htmlFor="note">Write Note</label>
      <textarea name="notes" id="notes" cols="30" rows="10" 
      placeholder="Additional Note to Client" value={note}
      onChange={(e)=> setnote(e.target.value)}></textarea>


      <button onClick={()=> setshowInvoice(true)} className="mt-5 bg-blue-500 text-white 
      font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
       hover:text-blue-500 transition-all duration-300">Preview Invoice</button>

      </div>
      </>
    )}
    </main>
    </>
  );
}

export default App;
