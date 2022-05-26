import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const Users = () => {
    // const {data: users, isLoading , error} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));
    // console.log(users);
    // if(isLoading){
    //     return <Loading></Loading>
    // }
    // if(error){
    //     console.log(error);
    // }
    return (
        <div>
           <h1>Users</h1>
        </div>
    );
};

export default Users;