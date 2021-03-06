import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const[review,setReview]=useState('');
    const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const reviewHandle=e=>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const rating = e.target.rating.value;
      const comment=e.target.comment.value
      console.log(name,email,rating,comment);
      const reviewData = { name, email, rating, comment}
      fetch('https://stark-fjord-84862.herokuapp.com/review', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(reviewData)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if (data.acknowledged === true) {
                  toast.success('Review is Added')
              } else {
                  toast.error('something wrong')
              }
             setReview('')
          })

  }
    return (
        <div className='flex  justify-start items-centter'>
            <form onSubmit={reviewHandle} className='ml-5'>
                <label class="label">
                    <span class="label-text"> name</span>
                   
                </label>
                <input type="text" value={user.displayName} name='name'  class="input input-bordered w-full max-w-xs"  required readOnly/>


                
                <label class="label">
                    <span class="label-text">Email</span>
                   
                </label>
                <input type="text" value={user.email} name='email'  class="input input-bordered w-full max-w-xs"  required readOnly/>

                <label class="label">
                    <span class="label-text">Ratings</span>

                </label>
                <input type="text"  placeholder="Type here" name='rating' class="input input-bordered w-full max-w-xs" required  />
                <label class="label">
                    <span class="label-text">Comments</span>

                </label>
                <input type="text"  placeholder="Comment here" name='comment' class="input input-bordered w-full max-w-xs" required  />



                <input class="btn w-full mt-3" type="submit" value='Post' />
           </form>
        </div>
    );
};

export default AddReview;