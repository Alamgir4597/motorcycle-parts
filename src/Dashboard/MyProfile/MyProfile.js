import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import ProfileUpdate from './ProfileUpdate';
const MyProfile = () => {
    const [user, loading, error1] = useAuthState(auth);
    // console.log(user)
 const[profile, setProfile]=useState([])
   
    return (
        <div>
        <h1>{user.displayName}</h1>
        <p>{user.email}</p>
        </div>
    );
};

export default MyProfile;