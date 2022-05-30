
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const OrderModal = ({order,setOrder}) => {
    const [user, loading, error1] = useAuthState(auth);
    const[error,setError ]= useState();
   
    const {_id, price, name,minqty,maxqty } = order;
    let errorMessage;
    if (parseInt(error) <= parseInt(minqty)) {
        errorMessage = <p className='text-red-600'>Order is Too low</p>
        // toast('order quantity low');
    }
    if (parseInt(error) >= parseInt(maxqty)) {
        // toast('order too high')
        errorMessage = <p className='text-red-600'>Not Available</p>


    }
    
    const onSubmitHandle = async event => {
event.preventDefault();
        const partsName = event.target.partsName.value
        const custName = event.target.custName.value

        const totalPrice = event.target.totalPrice.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const orderData = event.target.orderqty.value
        console.log(orderData);
     
        const allOrderData = { partsName, custName,totalPrice,email,phone,orderData};
        console.log(allOrderData)
// setOrder(null);
        fetch('https://stark-fjord-84862.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Order add is Success')
                }else{
                    toast.error('something wrong')
                }
                setOrder(null)
            })
       
    };
   const totalPrice=error*price;
    return (
        <div>
           
           

           
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2 gap-3">✕</label>
                   
                    <ToastContainer autoClose={1000} />
                    <p class="py-4">minimum Stock:{minqty}</p>
                    <p class="py-4">Available:{maxqty}</p>
                    <p class="py-4">unit price:{price}</p>
                    
                    
                    
                    <form onSubmit={onSubmitHandle} >
                        <input  type="text" name='partsName'  value={name}  placeholder="Type here" class="input input-bordered w-full max-w-xs" required  />

                        <input type="text" name='custName' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" required />

                       
                        
                        <input type="text" name='email' disabled  value={user?.email} class="input input-bordered w-full max-w-xs" required />

                        

                        <input type="text" name='phone' placeholder="phone Number" class="input input-bordered w-full max-w-xs" required />

                        <input onChange={(e) => setError(e.target.value)} type="number" name='orderqty' placeholder="input quantity" class="input input-bordered w-full max-w-xs" required />
                        {errorMessage}
                        <input type="number" name='totalPrice' value={totalPrice} class="input input-bordered w-full max-w-xs" required readOnly />
                        
                        <input disabled={parseInt(error) <= parseInt(minqty) || parseInt(error) >= parseInt(maxqty)}
                         class="btn w-full" type="submit" value='Place Order' />
                    </form>
                   
            </div>
                
                        

                
            </div>
           
        </div>
    )
};

export default OrderModal;