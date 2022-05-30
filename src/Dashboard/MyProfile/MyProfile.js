import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    
    return (
        <div>
           <h1>{user.displayName}</h1>
           <h1>{user.email}</h1>
        </div>
    );
};

export default MyProfile;