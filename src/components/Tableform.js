import React, { useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import {AiTwotoneDelete} from "react-icons/ai"
export default function Tableform ({description, setdescription,Quantity,
  setQuantity,price,setprice,amount,setamount, list, setlist, total, settotal}){
  

  // SUBMIT FORM FUNCTION
  const handleSubmit = (e) =>{
    e.preventDefault()

    if( ! description || !Quantity || ! price){
      alert("Please Fill the All")

    }else{
      const newItems={
        id: uuidv4(),
        description,
        Quantity,
        price,
        amount
      }
      setdescription("")
      setQuantity("")
      setprice("")
      setamount("")
      setlist([...list,newItems])
    }

  }
  //CALCULATE AMOUNT 
  useEffect(()=>{
    const calculateAmount=(amount) => {
      setamount(Quantity*price)
    }
    calculateAmount(amount)
  },[amount,Quantity,price,setamount])
  
// Calculate total ammount
useEffect(() => {
  let rows= document.querySelectorAll(".amount")
  let sum=0
  for (let i=0; i< rows.length; i++){
    if (rows[i].className === "amount"){
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      settotal(sum) 
    }
  }
})
// DELETE FUNCTION
  const deleteRow =(id) =>  setlist(list.filter((row) => row.id !==id))

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center">
        <label htmlFor="description">Items Description</label>
        <input type="text" name="description" id="description" placeholder="Item Description"
        value={description}
        onChange={(e)=> setdescription(e.target.value)}
        />
        </div>
        <div className="flex flex-col justify-center">
        <label htmlFor="Quantity">Quantity</label>
        <input type="text" name="text" id="Quantity" placeholder="Quantity" 
        value={Quantity}
        onChange={(e)=> setQuantity(e.target.value)}
        />
        </div>
        <div className="flex flex-col justify-center">
        <label htmlFor="price">Price</label>
        <input type="text" name="text" id="price" placeholder="Price" 
        value={price}
        onChange={(e)=> setprice(e.target.value)}
        />

        </div>
        <div>
        <label htmlFor="amount">Total Amount: </label>
        <p>{amount}</p>
        </div>
        <button type="submit" className="mb-3 mt-3 bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
        hover:text-blue-500 transition-all duration-300">Add Items</button>
        </form>
        <table width="100%" className="mb-10">
        <thead>
            <tr className="bg-gray-200 p-1">
              <td>Items Description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total Amount</td>
            </tr>
          </thead> 
          {list.map(({id, description,Quantity,price,amount}) => (
            <React.Fragment key={id}>
          <tbody>
            <tr>
              <td>{description}</td>
              <td>{Quantity}</td>
              <td>{price}</td>
              <td className="amount">{amount}</td>
              <td><button onClick = {()=> deleteRow(id)}><AiTwotoneDelete className="text-red-500"/></button></td>
            </tr>
          </tbody>
            </React.Fragment>
          ))}
          </table>
          <div>
            <h2 className="text-gray-800 text-2xl mb-3 ">Rs.{total.toLocaleString()}</h2>
          </div>
      </>
    )
}