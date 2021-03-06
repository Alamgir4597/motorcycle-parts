import { success } from 'daisyui/src/colors';
import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch}) => {
    const { email,role}=user;

    const makeAdmin=()=>{
        fetch(`https://stark-fjord-84862.herokuapp.com/user/admin/${email}`,{
method:'PUT',

        })
        .then(res=>{
            if(res.status === 403 || res.status === 401){
                toast.error('Failed Operation')
            }
        })
        .then(data=>{ 
            if(data.modifiedCount>0){
                refetch();
                toast.success('made admin')
            }
       
        })
    }
    
    return (
        <tr>
            <th>{ index+1}</th>
            <td>{email}</td>
            <td>{ role !=='admin' &&<button  onClick={makeAdmin} class="btn btn-success">make admin</button>} </td>
            <td><button class="btn btn-error">delete</button></td>
        </tr>
    );
};

export default User;