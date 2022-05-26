import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const reviewHandle=e=>{
      e.preventDefault();
      const name = e.target.rating.value;
      const email = e.target.email.value;
      const rating = e.target.rating.value;
      console.log(name,email,rating)
  }
    return (
        <div className='flex  justify-start items-centter'>
            <form onSubmit={reviewHandle} className='ml-5'>
                <label class="label">
                    <span class="label-text"> name</span>
                   
                </label>
                <input type="text" value={user.displayName} name='name' placeholder="Type here" class="input input-bordered w-full max-w-xs"  required readOnly/>


                
                <label class="label">
                    <span class="label-text">Email</span>
                   
                </label>
                <input type="text" value={user.email} name='email' placeholder="Type here" class="input input-bordered w-full max-w-xs"  required readOnly/>

                <label class="label">
                    <span class="label-text">Ratings</span>

                </label>
                <input type="text"  placeholder="Type here" name='rating' class="input input-bordered w-full max-w-xs" required  />



                <input class="btn w-full mt-3" type="submit" value='Post' />
           </form>
        </div>
    );
};

export default AddReview;