import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
   const[MyOrder, setMyOrder]=useState([]);
   const[user]=useAuthState(auth);
const navigate= useNavigate();

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?custName=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data=>setMyOrder(data))
        }
    },[user])
    
    return (
        <div>
           <h2>My total order:{MyOrder.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Order Qty</th>
                            <th>Total price</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                            MyOrder.map((order , index) => < tr key={order._id} >
                                <th>{index+1}</th>
                                <td>{order.custName}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                
                                <td>{order.orderData}</td>
                                <td>{(order.totalPrice &&  order.paid) && <Link to={`/dashboard/payment/${order._id}`}>< button class="btn btn-secondary">Button</button></Link>}
                                    {(order.totalPrice && order.paid) && <span className='text-success'>paid</span>}
                                </td>

                            </tr>)
                       }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;