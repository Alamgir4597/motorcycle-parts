import React, { useEffect, useState } from 'react';
import { QueryClient, useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';

const Users = () => {
   const [users, setUsers]= useState([]);
    // const {data: users, isLoading , error} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));
    // console.log(users);
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    // if(error){
    //     console.log(error);
    // }
    useEffect(() => {
        const url =`http://localhost:5000/user`;
        fetch(url,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>setUsers(data))
    }, [])
    return (
        <div>
           <h1>Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        
                           {
                               users.map((user, index)=><User key={user._id} index={index}  user={user}></User>)
                           }
                        
                       
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;