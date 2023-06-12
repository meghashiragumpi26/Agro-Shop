import React,{useState} from 'react'
import axios from 'axios'

const CustomerOrder = () => {

    const initialValues = {userId:"",product_name:"",qty:"",price:"",total:"",order_date:"",order_time:"",order_status:"",payment_status:"",product_id:""}
    const [formValues,setFormvalues] = useState(initialValues)
   
  
    const handleChange = (e) => {
      const {name,value}= e.target
      setFormvalues({...formValues,[name]:value});
      console.log(formValues)
    }
    const FormCustomerOrder =(e) =>{
e.preventDefault();
axios.post("http://localhost:3001/customerorder",{
        customerorderdata:formValues       
}).then((response)=>{
    console.log(response);
    alert("Thank You for Order")
    window.location="http://localhost:3000/login"

})
.catch(error =>{
    console.log(error)
    })
  };
  return (
    <div>
      <div  className='container mt-2'>
        <div className='row'>
        
                    <form onSubmit={FormCustomerOrder}>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.userId} name='userId' className='form-control' placeholder='Enter your userId' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.product_name} autoComplete='on'  name='product_name' className='form-control' placeholder='Enter your product_name' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.qty} name='qty' className='form-control' placeholder='Enter your quantity' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.price} name='price' className='form-control' placeholder='Enter your price' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.total} name='total' className='form-control' placeholder='Enter your total' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.order_date} name='order_date' className='form-control' placeholder='Enter your order_date' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.order_time} name='order_time' className='form-control' placeholder='Enter your order_time' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.order_status} name='order_status' className='form-control' placeholder='Enter order_status' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.payment_status} name='payment_status' className='form-control' placeholder='Enter your payment_status' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.product_id} autoComplete='on'  name='product_id' className='form-control' placeholder='Enter your product_name' onChange={handleChange} required/>
                        </div>
                        <input type='submit'  className='btn btn-success' value='Submit'/>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CustomerOrder