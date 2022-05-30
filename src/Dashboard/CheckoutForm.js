import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';


const CheckoutForm = ({pay}) => {
    const [cardError, setCardError]=useState('');
    const stripe=useStripe();
    const[clientSecret,setClientSecret]= useState('')
    const [success, setSuccess]= useState('')
    const [transactionId, setTransactionId]= useState('')
    const [processing, setProcessing]= useState(false)
    const elements= useElements();
    const {_id, price, custName,email}=pay;
    useEffect(()=>{ 
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)

                fetch()
            }
            
        })
    },[])   

    const handleSubmit= async(event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        const{paymentIntent,error:intentError}= await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card:card,
                    billing_details:{
                        name: custName,
                        email:email
                    },
                },
            },
        );
        if(intentError){
            setCardError(intentError.message)
        }else{
            setCardError('')
            setTransactionId()
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;