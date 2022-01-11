import React from "react"
export default function Table({list, total}){
    return(
        <>
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
              <td>{amount}</td>
            </tr>
          </tbody>
            </React.Fragment>
          ))}
          </table>
          <div>
            <h2 className=" flex items-flex justify-end text-gray-800 text-2xl mb-3 font-bold">Rs.{total.toLocaleString()}</h2>
          </div>
        </>
    )
}