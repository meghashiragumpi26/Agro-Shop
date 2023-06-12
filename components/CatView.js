import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";


const CatView = () => {

    const [CatList, setCatList] = useState([])
    //const utype=localStorage.getItem('log')
    useEffect(() => { 
        getCategory();   
      }, []);
  
      const getCategory = async() => {
        const result = await axios.get("http://localhost:3001/catview");
        setCatList(result.data);
        console.log(result.data);
      };

  return (
    <div>
        <div className='container mt-3 p-3'>
            <div className='row'>
                <h1> List of Categories </h1>

                <table className='table table-bordered table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <th>#</th>
                            <th> Category Name</th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                             CatList.map((cat,index) => {
                            return(<tr key={cat.id}>
                                <td> {index+1} </td>
                                <td> {cat.category}</td>
                            </tr>
                           )
                           }
                          )}
                        </tbody>
                    
                </table> 
            </div>
        </div>
      
    </div>
  )
}

export default CatView
