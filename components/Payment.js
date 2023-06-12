import React,{useState} from 'react'
import axios from 'axios'


const Payment = () => {
  const initialValues = {userId:"",orderId:"",amount:"",payment_date:"",transaction_no:""}
  const [formValues,setFormvalues] = useState(initialValues)
 

  const handleChange = (e) => {
    const {name,value}= e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues)
  }
  const FormPayment =(e) =>{
e.preventDefault();
axios.post("http://localhost:3001/payment",{
      paymentdata:formValues       
}).then((response)=>{
  console.log(response);
  alert("Thank You for Order")
  window.location="http://localhost:3000/login"

})
.catch(error =>{
  console.log(error)
  })
}

  return (
    <div>
      <div  className='container mt-2'>
        <div className='row'>
        
                    <form onSubmit={FormPayment}>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.userId} name='userId' className='form-control' placeholder='Enter your userId' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.orderId} autoComplete='on'  name='orderId' className='form-control' placeholder='Enter your orderId'  onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'value={formValues.amount} name='amount' className='form-control' placeholder='Enter your amount'  onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'value={formValues.payment_date} name='payment_date' className='form-control' placeholder='Enter your payment_date'  onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'value={formValues.transaction_no} name='transaction_no' className='form-control' placeholder='Enter your transaction_no'  onChange={handleChange} required/>
                        </div>
                        
                        <input type='submit' className='btn btn-success' value='Submit'/>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Payment
