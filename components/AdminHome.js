import React from 'react'
//import logo from "../Assets/a1.png"
import { useState,useEffect } from "react";
import axios from "axios";

const AdminHome = () => {
    //const getuseremail=localStorage.getItem('user')
    //const utype=localStorage.getItem('log')

    const [OrderList, setOrderList] = useState([])
    //const utype=localStorage.getItem('log')

    useEffect(() => { 
        getOrders();   
      }, []);
  
      const getOrders = async() => {
        const result = await axios.get("http://localhost:3001/allorders");
        setOrderList(result.data);
        console.log(result.data);
      };


  return (
    <div>
      <div className='container-fluid bg-success mt-3 p-3'>
        <div className='row'>
            <h1 className='text-white'>Welcome to Admin Panel</h1>
            <p><button className='btn btn-warning text-white'> {new Date().toLocaleString() + ""} </button></p>
        </div>
     </div>

     <div className='container-fluid bg-light mt-3 p-3'>
        <div className='row'>
            <table className='table table-bordered table-striped'>
            <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                            <th> Order Id</th>
                            <th> Product Name</th>
                            <th> Qty</th>
                            <th> Price </th>
                            <th> Total </th>
                            <th> Order Date</th>
                            <th> Order Time </th>
                            <th> Order Status </th>
                            <th> Payment Status </th>
                            
                            
                        </tr>
                    </thead>
                    <tbody> 
                    {
                      OrderList.map((mo,index) => {
                        // let message
                        // if(mo.delivered_status==="progressing"){
                        //   message = <div className='text-primary fs-4 fw-bold'> progressing  </div>
                        // }
                        // else(mo.delivered_status==="delivered")
                        // {
                        //   message = <div className='text-primary fs-4 fw-bold'> delivered  </div>
                        // }
                        
            return(<tr key={mo.id}>
              <td>{index+1}</td>
              <td><a href={`/viewcustomer/${mo.userId}`}> {mo.id} </a> </td>
              <td>{mo.product_name}</td>
              <td>{mo.qty}</td>
              <td>{mo.price}</td>
              <td>{mo.total}</td>
              <td>{mo.order_date}</td>
              <td>{mo.order_time}</td>
              <td className='text-success fs-4 fw-bold'>{mo.order_status}</td>
              <td className='text-primary fs-4 fw-bold'>{mo.payment_status}</td>
              
              
             
            </tr>
        
            )
            }
              )}
                         
        </tbody>
            </table>
            
     </div>
    </div>
    </div>
  )
}

export default AdminHome
