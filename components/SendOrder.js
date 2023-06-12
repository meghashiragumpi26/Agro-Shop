import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const uid=localStorage.getItem('user')
const SendOrder = () => {
    const {id} = useParams();
    console.log("Item id: " +id)
const [qty,setqty] = useState(1)

const handleChange = (e) => {
    setqty(e.target.value);
}

const SendQty=(e)=> {
    e.preventDefault();
    axios.post(`http://localhost:3001/sendorder/${uid}`,{
        qty:qty,
        id:id,
        uid:uid
    }).then((response)=>{
        console.log(response);
        alert("Thank You For Your Order")
        window.location="http://localhost:3000/userhome"
    })

    .catch(error =>{
        console.log(error)
    })
}
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <h1> Send your Order</h1>
            <form onSubmit={SendQty}>
                <div className='mt-3 mb-3'>
                    <input type='number' min={1} value={qty} onChange={handleChange} name='qty' className='form-control'/>
                </div>
                <p> <button className='btn btn-outline-success'>Send</button></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SendOrder
