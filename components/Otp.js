import axios from 'axios'
import React,{useState} from 'react'

const Otp = () => {
  const [otp,setOtp] = useState('')
  const [status,setStatus]=useState('')


  const handleChange = (e) => {
    //const {email,value}= e.target
    setOtp(e.target.value);
    console.log(e.target.value)
  }

  const SubmitOtp=(e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/otp",{
           otp:otp

    }).then((response)=>{
        console.log(response);
     if(response.data.length>0)
        {
          window.location = 'http://localhost:3000/resetpass/';
        }
        else
{
  setStatus('Sorry...! Invalid otp')
 }
 })
.catch(error =>{
    console.log(error)
    })
  }
    return (
    <div>
      <div  className='container mt-2' style={{width:"700px"}}>
        <div className='row'>
            <div className='card'>
                <div className='card-header'>
                    <h1>One Time Password</h1>
                </div>
                <div className='card-body'>
                    <form onSubmit={SubmitOtp}>
                        <div className='mb-3 mt-3'>
                            <input type='number' value={otp} name='otp' className='form-control' placeholder='Enter your Otp' onChange={handleChange} required/>
                        </div>
                        <input type='submit' className='btn btn-success' value='Verify Otp'/>
                    </form>

                    <p className='text-danger'> {status}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Otp
