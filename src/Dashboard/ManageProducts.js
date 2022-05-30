import React from 'react';
import { toast } from 'react-toastify';
import useParts from '../PartsToolsHooks/PartsToolsHooks';

const ManageProducts = () => {

    const [parts, setParts]=useParts([]);
    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure')
        if(proceed){
            fetch(`http://localhost:5000/order/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount){
                    toast('deleted')
                }
                const rem=parts.filter(p=>p._id !== id)
                setParts(rem);
            })
        }
        
      
       
       
    }
    return (
        <div>
            <h1>Manage Products</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Min Quantity</th>
                            <th>max  Quantity</th>
                            <th>Unit Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            parts.map((manage , index) =>
                                <tr key={manage._id}>
                                    <th>{index+1}</th>
                                    <td>{manage.name}</td>
                                    <td>{manage.minqty}</td>
                                    <td>{manage.maxqty}</td>
                                    <td>{manage.price}</td>
                                    <td><button  onClick={()=>handleDelete(manage._id)} class="btn">delete</button></td>
                                </tr>
                        )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;