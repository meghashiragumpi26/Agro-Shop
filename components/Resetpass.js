import axios from 'axios'
import React,{useState} from 'react'

const uid=localStorage.getItem('user')
const Resetpass = () => {
  const [newpass,setNewpass] = useState('')
  const [confirmpass,setConfirmpass] =useState('')
  //const [status,setStatus]=useState('')

  const handleChange = (e) => {
    //const {email,value}= e.target
    setNewpass(e.target.value);
    console.log(e.target.value)
  }
    const handleChangeOne = (e) => {
    setConfirmpass(e.target.value);
    console.log(e.target.value)
  }
  const ResetFormSubmit=(e) =>{
    e.preventDefault();
    if(newpass===confirmpass)
    {
    axios.post("http://localhost:3001/resetpass",{
           newpass:newpass,
           confirmpass:confirmpass,
           uid:uid
    }).then((response)=>{
        console.log(response);
          window.location = 'http://localhost:3000/login/'
 })
.catch(error =>{
    console.log(error)
    })
  }
  else{
    alert("New password and confirm password must be same")
  }}
    return (
    <div>
      <div  className='container mt-2' style={{width:"700px"}}>
        <div className='row'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Reset Password</h1>
                </div>
                <div className='card-body'>
                    <form onSubmit={ResetFormSubmit}>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={newpass} name='newpass' className='form-control' placeholder='Enter your new password' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={confirmpass} name='confirmpass' className='form-control' placeholder='Enter your confirm password' onChange={handleChangeOne} required/>
                        </div>
                        <input type='submit' className='btn btn-success' value=' Reset Password'/>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )}
export default Resetpass