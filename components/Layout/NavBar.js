import React from 'react'
import logo from "../../Assets/agro_logo.jpg"
import { useState,useEffect } from "react";
import axios from "axios";

const utype=localStorage.getItem('log')

const Navbar = () => {
  const [CategoryList, setCategoryList] = useState([])

  useEffect(() => { 
    getCategory();   
  }, []);

  const getCategory = async() => {
    const result = await axios.get("http://localhost:3001/catview");
    setCategoryList(result.data);
    console.log(result.data);
  };


  const logout= ()=>{
    localStorage.clear()
    window.location = 'http://localhost:3000/login';
  }

  if(utype==="user")
  {
  return (
    <div>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container-fluid'>
                <span className='text-brand text-white fs-2'><img src={logo} width={100} height={100} alt='Not Found' className='rounded-circle'/>Agro Shop</span>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href='/userhome'  className='nav-link'> Home </a></li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/userhome" role="button" data-bs-toggle="dropdown">Category</a>

                    <ul class="dropdown-menu">
                    {
                      CategoryList.map((cat,index) => {
                        let loc = "http://localhost:3000/cat_wise_menu/"+cat.category;
                        return(<li key={cat.id}><a className="dropdown-item" href={loc}>{cat.category}</a></li>)
                       
                    }
                    )}
                    
                  </ul>
      </li>
                    <li className='nav-item'><a href='/myorder'  className='nav-link'> Orders </a></li>
                    <li className='nav-item'><a href='/feedback'  className='nav-link'> feedback </a></li>
                    <li className='nav-item'><button className='btn btn-danger' onClick={logout}> Logout </button> </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}


else if(utype==="admin")
{
return (
  <div>
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <div className='container-fluid'>
              <span className='text-brand text-white fs-2'>DashBoard|Admin</span>
              <ul className='navbar-nav'>
                  <li className='nav-item'><a href='/adminhome'  className='nav-link'> Home </a></li>
                  
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/userhome" role="button" data-bs-toggle="dropdown">Category</a>
                    <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="/addcat"> Add </a></li>
                     <li><a class="dropdown-item" href="/catview"> View </a></li>  
                   </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/userhome" role="button" data-bs-toggle="dropdown">Agro Product</a>
                    <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="/addproducts"> Add </a></li>
                     <li><a class="dropdown-item" href="/productview"> View </a></li>  
                   </ul>
                </li>
                  <li className='nav-item'><a href='/feedbackview'  className='nav-link'> Feedback </a></li>
                  <li className='nav-item'><a href='/paymentview'  className='nav-link'> Payment Report </a></li>
                  <li className='nav-item'><button className='btn btn-danger' onClick={logout}> Logout </button> </li>
                  
              </ul>
          </div>
      </nav>
  </div>
)
}

else 
{

  return (
    <div>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container-fluid'>
                <span className='text-brand text-white fs-2'><img src={logo} width={100} height={100} alt='Not Found' className='rounded-circle'/>AgroShop</span>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href='/'  className='nav-link'> Home </a></li>
                    <li className='nav-item'><a href='/about'  className='nav-link'> About </a></li>
                    <li className='nav-item'><a href='/contact'  className='nav-link'> Contact </a></li>
                    <li className='nav-item'><a href='/user_reg'  className='nav-link'> SignUp </a></li>
                    <li className='nav-item'><a href='/login'  className='nav-link'> Login </a></li>
                    
                </ul>
            </div>
        </nav>
      
    </div>
  )

}
}

export default Navbar
