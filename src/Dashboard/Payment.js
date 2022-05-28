import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import {  loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51L4TtJJhR8ffwOMt7DC1NLOuRly5FpxPQHDMQuVgP7MVpK0Xt88imvpNMs2RKm2M6KLnnYxfEHHNJErRTWJRJOER000N3cxV26');
const Payment = () => {
    const [id] = useParams();
    const[payment, setPayment]= useState();
    const url = `http://localhost:5000/order/${id}`;
    fetch(url,{

    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    return (

        <div>
           {
               payment.map(pay=>
               
                   <div key={pay._id} class="hero min-h-screen bg-base-200">
                       <div class="hero-content flex-col lg:flex-row-reverse">
                           <div class="card w-50 bg-base-100 shadow-xl">
                               <div class="card-body">
                                   <p>hello {pay.custName}</p>
                                   <h2 class="card-title">pay for{pay.partsName}</h2>
                                   <p>Please pay {pay.totalPrice}</p>
                                   <div class="card-actions justify-end">
                                       <button class="btn btn-primary">Buy Now</button>
                                   </div>
                               </div>
                           </div>
                           <div class="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
                               <div class="card-body">

                                   <Elements stripe={stripePromise}>
                                       <CheckoutForm pay={pay}/>
                                   </Elements>
                                  
                               </div>
                           </div>
                       </div>
                   </div>
                
                )
           }
        </div>
    );
};

export default Payment;