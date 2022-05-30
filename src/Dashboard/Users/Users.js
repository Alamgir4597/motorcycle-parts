import React, { useEffect, useState } from 'react';
import { QueryClient, useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import User from './User';

const Users = () => {
   
    const {data: users, isLoading , error,refetch} = useQuery('users', ()=> fetch('https://stark-fjord-84862.herokuapp.com/user',{
        method:"GET",
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    console.log(users);
    if(isLoading){
        return <Loading></Loading>
    }
    if(error){
        console.log(error);
    }
    
           
    
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
                               users.map((user, index)=><User key={user._id} index={index} refetch={refetch} user={user}></User>)
                           }
                        
                       
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;


   