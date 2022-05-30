import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import useParts from '../PartsToolsHooks/PartsToolsHooks';

const ManageProducts = () => {

        const { data: tools , isLoading, error,refetch} = useQuery('tools', () =>
        fetch('https://stark-fjord-84862.herokuapp.com/parts').then(res =>
            res.json()
        )
    )
    console.log(tools)
if(isLoading){
    return <Loading></Loading>
}
if(error){
    console.log(error)
}

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure')
        if(proceed){
            fetch(`https://stark-fjord-84862.herokuapp.com/parts/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount){
                    toast('deleted')
                }
                const rem=tools.filter(p=>p._id !== id)
                refetch(rem);
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
                            
                            <th>Parts Name</th>
                            <th>Min Quantity</th>
                            <th>max  Quantity</th>
                            <th>Unit Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                      {
                          tools.map(p=>
                            
                              <tr >

                                  <td>{p.name}</td>
                                  <td>{p.minqty}</td>
                                  <td>{p.maxqty}</td>
                                  <td>{p.price}</td>

                                  <td><button onClick={() => handleDelete(p._id)} class="btn">delete</button></td>
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