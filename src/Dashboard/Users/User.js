import { success } from 'daisyui/src/colors';
import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,index}) => {
    const { email,role}=user;

    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
method:'PUT',

        })
        .then(res=>res.json())
        .then(data=>{ 
            if(data.modifiedCount>0){
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