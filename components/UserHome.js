import React from 'react'
//import logo from '../Assets/coffee.jpg'
import {useState,useEffect} from "react";
import axios from 'axios';

const UserHome =() => {
  const getuseremail=localStorage.getItem('user')
  const [ProductList,setProductList] = useState([])

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts= async() => {
    const result = await axios.get("http://localhost:3001/home");
    setProductList(result.data);
    console.log(result.data);
  };
   
    //const utype=localStorage.getIteam('log)
  return (  
    <div>
      <div className='container-fluid bg-primary mt-3 p3'>
        <div className='row'>
            <h1 className='text-white'> New Arrived Product </h1>
            <p><button className='btn btn-warning text-white'> Welcome: {getuseremail} </button></p>
        </div>
      </div>

      <div className='container-fluid bg-light mt-3 p-3'>
        <div className='row'>
          <h3 className='text-danger'>
            List Of Items
          </h3>
          <div className='divider py-1 bg-success'> </div>
          {
            ProductList.map((product) => {
          return (

            <>
            <div className='col-lg-3 mt-2'>
            <h2 key={product.id}> {product.category}</h2>
            <p><img src={`../upload/${product.image}`} alt='not found' width={100} height={100} className='rounded-circle'></img></p>
            <p>₹{product.price}/-</p>
            <p> <button className='btn btn-danger text-white'><a href={`/sendorder/${product.id}`} style={{textDecoration:"none",color:"white"}}> Buy </a></button></p>
            </div>
            </>
          )
        }
        )}

        </div>

      </div>
    </div>
  )
}

export default UserHome