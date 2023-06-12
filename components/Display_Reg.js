import {useState,useEffect} from "react";
import axios from 'axios';

const Display_Reg =() => {
  const [reg,setreg] = useState([])

  useEffect(() => {
    getuser();
  },[]);

  const getuser= async() => {
    const result = await axios.get("http://localhost:3001/display_reg");
    setreg(result.data);
    console.log(result.data);
  } 

  const deleteUser = id => {
    axios.delete(`http://localhost:3001/display_reg/delete/${id}`)
    .then (response => {
        getuser();
    });
}

  return (
    <div>
      <div class="container mt-3">
        <div className='row'>
  <table className="table table-stripped table-border">
    <thead className="bg-dark text-white">
        <th>#</th>
      <th>Name</th>
      <th>City</th>
      <th>Address</th>
      <th>Pincode</th>
      <th>Contact </th>
      <th>Email</th>
      <th>Password</th>
      <th colSpan={2}>Action</th>
    </thead>

    <tbody>
        {reg.map((val,key) =>{
        return(
        <tr>
            <td>{key + 1}</td>
            <td>{val.name}</td>
            <td>{val.city}</td>
            <td>{val.address}</td>
            <td>{val.pincode}</td>
            <td>{val.contact}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
            <td><button className='btn btn-primary' onClick={() => deleteUser(val.id)}> Delete </button></td>
        </tr>
        )
        })
        }
    </tbody>
  </table>
  </div>
</div>
</div>
     )
}

export default Display_Reg
