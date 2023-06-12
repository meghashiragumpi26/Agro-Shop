import React,{useState} from 'react'
import axios from 'axios'


const FeedBack = () => {
  const initialValues = {userId:"",about_product:"",about_service:""}
        const [formValues,setFormvalues] = useState(initialValues)

        const handleChange = (e) => {
          const {name,value}= e.target
          setFormvalues({...formValues,[name]:value});
          console.log(formValues)
        }
        const FormFeedBack =(e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/feedback",{
            feedbackdata:formValues       
    }).then((response)=>{
        console.log(response);
        alert("Thank You for FeedBack")
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
        
                    <form onSubmit={FormFeedBack}>
                        <div className='mb-3 mt-3'>
                            <input type='text' value={formValues.userId} name='userId' className='form-control' placeholder='Enter your userId' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'  value={formValues.about_product} autoComplete='on'  name='about_product' className='form-control' placeholder='Enter your about_product' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'  value={formValues.about_service} name='about_service' className='form-control' placeholder='Enter your about_service' onChange={handleChange} required/>
                        </div>
                        
                        <input type='submit' className='btn btn-success' value='Submit'/>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default FeedBack
