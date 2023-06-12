import {useState,useEffect} from "react";
import axios from 'axios';

const DisplayAddProducts =() => {
  const [products,setproducts] = useState([])

  useEffect(() => {
    getuser();
  },[]);

  const getuser= async() => {
    const result = await axios.get("http://localhost:3001/displayaddproducts");
    setproducts(result.data);
    console.log(result.data);
  };

  const deleteUser = id => {
    axios.delete(`http://localhost:3001/displayaddproducts/delete/${id}`)
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
      <th>Category</th>
      <th>Product Name	</th>
      <th>uom</th>
      <th>qty</th>
      <th>Price </th>
      <th>Image</th>
      <th>Stock</th> 
      <th colSpan={2}>Action</th>
    </thead>

    <tbody>
        {products.map((val,key) =>{
        return(
        <tr>
            <td>{key + 1}</td>
            <td>{val.category}</td>
            <td>{val.product_name	}</td>
            <td>{val.uom}</td>
            <td>{val.qty}</td>
            <td>{val.price	}</td>
            <td>{val.image	}</td>
            <td>{val.stock}</td>
            <td><img  src={`../upload/${val.image}`} alt='not found' width={50} height={50}/> </td>
            <td> <button className='btn btn-primary' onClick={() => deleteUser(val.id)}> Delete </button></td>
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

export default DisplayAddProducts
