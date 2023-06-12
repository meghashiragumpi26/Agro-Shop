import React,{useState} from 'react'
import axios from 'axios'

const User_Reg = () => {
        const initialValues = {name:"",city:"",address:"",pincode:"",contact:"",email:"",password:""}
        const [formValues,setFormvalues] = useState(initialValues)
       
      
        const handleChange = (e) => {
          const {name,value}= e.target
          setFormvalues({...formValues,[name]:value});
          console.log(formValues)
        }
        const FormUser_Reg =(e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/user_reg",{
            user_regdata:formValues       
    }).then((response)=>{
        console.log(response);
        alert("Thank You for Registration")
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
        
                    <form onSubmit={FormUser_Reg}>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.name} name='name' className='form-control' placeholder='Enter your name' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.city} autoComplete='on'  name='city' className='form-control' placeholder='Enter your city' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.address} name='address' className='form-control' placeholder='Enter your address' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.pincode} name='pincode' className='form-control' placeholder='Enter your pincode' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.contact} name='contact' className='form-control' placeholder='Enter your contact' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='email'  value={formValues.email}name='email' className='form-control' placeholder='Enter your email' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.password} name='password' className='form-control' placeholder='Enter your password' onChange={handleChange} required/>
                        </div>
                        <input type='submit' className='btn btn-success' value='Login'/>
                    </form>
                </div>
            </div>
    </div>
  )
}
export default User_Reg
