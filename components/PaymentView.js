import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";

const PaymentView = () => {
    const [PaymentData, setPaymentData] = useState([])
    //const [total,setTotal] = useState("")
    //const initialValue = 0;
    //let total=0

    useEffect(() => { 
        getPayment();  
    });
      
    const getPayment = async() => {
        const result = await axios.get(`http://localhost:3001/paymentview`);
        setPaymentData(result.data);
        console.log(result.data);
          };
    
  return (
    <div>
      <div className='container-fluid mt-2'>

         <div className='row'>
            <h1> Payment Report </h1>
            <table className='table table-bordered table-hover mt-2'>
               <thead className='table-primary'>
                 <tr>
                    <th>#</th>
                    <th>Order Id</th>
                    <th>Payment Date </th>
                    <th>Paid Amount </th>
                    <th>Transaction No </th>
                 </tr>
               </thead>

               <tbody>
               {
                 
                 PaymentData.map((data,index) => {
                  //setGrandTotal (grand_total + data.paid_amount)
                   //grand_total=grand_total+data.paid_amount;
                   //let amount=data.paid_amount
                   //setTotal(...total,[amount])
                  
                  // total = data.reduce((accumulator,current) => accumulator + current.paid_amount,initialValue)
                   return(<tr key={data.id}>
                    <td>{index+1}</td>
                    <td><a href={`viewcustomer/${data.userId}`}>{data.orderId}  </a> </td>
                    <td>{data.payment_date}</td>
                    <td>{data.amount} </td>
                    <td>{data.transaction_no} </td>
                    
                </tr>)
             })

               
              
                    
              }
              
                 <tr className='bg-primary p-3 text-white'>
                    <td>Grand Total</td>
                    <td></td>
                    <td></td>
                    <td>{PaymentData.reduce((total, product)=>total+(product.amount),0)}</td>
                    <td></td>
                 </tr>
                </tbody> 
            </table>
         </div>
      </div>
    </div>
  )
}

export default PaymentView
