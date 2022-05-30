import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading'
const Reviews = () => {

    const { data: reviews, isLoading, error, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
   console.log(reviews)
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        console.log(error);
    }

    return (
        <div>
            <h1>Review</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2  ml-3 justify-items-center'>
                {
                    reviews.map(review=>
                        <div key={review._id} class="card w-64 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Name:{review.name}</h2>
                                <p>Comments: {review.email}</p>
                                <p>Comments: {review.comment}</p>
                                <p>Comments: {review.rating}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Reviews;