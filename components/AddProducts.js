import React,{useState} from 'react'
import axios from 'axios'

const AddProducts = () => {
      
    const initialValues = {category:"",product_name:"",uom:"",qty:"",price:"",image:"",stock:""}
        const [formValues,setFormvalues] = useState(initialValues)
        const [image,setFile]= useState ("")
       
      
        const handleChange = (e) => {
          const {name,value}= e.target
          setFormvalues({...formValues,[name]:value});
          console.log(formValues)
        }

        const setImgFile =(e) => {
            //console.log(e.target,files[0])
            setFile(e.target.files[0])
        }

        const AddAddProducts =(e) =>{
    e.preventDefault();
    var formData = new FormData();
    formData.append("image",image)
    formData.append("category",formValues.category)
    formData.append("product_name",formValues.product_name)
    formData.append("uom",formValues.uom)
    formData.append("qty",formValues.qty)
    formData.append("price",formValues.price)
    formData.append("stock",formValues.stock)
    console.log(...formData)
    const config = {
        headers:
        {
            "Content-Type":"multipart/form-data"
        }
    }

    axios.post("http://localhost:3001/addproducts",
        formData,config
    ).then((response)=>{
        console.log(response);
        alert("Thank You for Order")
       // window.location="http://localhost:3000/login"
    
    })
    .catch(error =>{
        console.log(error)
        })
      }
  return (
    <div>
      <div  className='container mt-2'>
        <div className='row'>
        
                    <form onSubmit={AddAddProducts}>
                        <div className='mb-3 mt-3'>
                            <input type='text'  value={formValues.category} name='category' className='form-control' placeholder='Enter your category' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'  value={formValues.product_name} autoComplete='on'  name='product_name' className='form-control' placeholder='Enter your product_name' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='text'  value={formValues.uom} name='uom' className='form-control' placeholder='Enter your uom' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='number'  value={formValues.qty} name='qty' className='form-control' placeholder='Enter quantity' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='number'  value={formValues.price} name='price' className='form-control' placeholder='Enter your price' onChange={handleChange} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='file' name='file' className='form-control' onChange={setImgFile} required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <input type='number' value={formValues.stock} name='stock' className='form-control' placeholder='Enter your stock' onChange={handleChange} required/>
                        </div>
                        <input type='submit' className='btn btn-success'/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddProducts