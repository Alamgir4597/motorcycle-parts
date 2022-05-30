
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const ManageAllOrders = () => {
//     const { data: orders , isLoading, error} = useQuery('orders', () =>
//         fetch('https://stark-fjord-84862.herokuapp.com/order').then(res =>
//             res.json()
//         )
//     )
    
// if(isLoading){
//     return <Loading></Loading>
// }
const[orders,setOrders]=useState([]);
useEffect(()=>{
    fetch('https://stark-fjord-84862.herokuapp.com/order',{
        // method:'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res=>res.json())
    .then(data=>setOrders(data))
},[])

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            fetch(`https://stark-fjord-84862.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast('deleted')
                    }
                    const rem = orders.filter(p => p._id !== id)
                    setOrders(rem);
                })
        }




    }
    
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Order Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((manage, index) =>
                                <tr key={manage._id}>
                                    <th>{index + 1}</th>
                                    <td>{manage.custName}</td>
                                    <td>{manage.email}</td>
                                    <td>{manage.phone}</td>
                                    <td>{manage.orderData}</td>
                                    <td>{manage.totalPrice}</td>
                                    <td><button onClick={() => handleDelete(manage._id)} class="btn">delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ManageAllOrders;