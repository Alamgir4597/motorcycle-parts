import React from 'react';

const PurchaseItems = ({ purchase, setOrder}) => {
    const{name,img,minqty,maxqty,description,price}= purchase;
    
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div className='flex'>
                    <p>Minimum Quantity:{ minqty }</p>
                    <p>Available Quantity:{maxqty}</p>
                    <p>Unit  price:{price}</p>
                </div>
                <div class="card-actions">
                    <label onClick={() => setOrder(purchase)} for="my-modal-3" class="btn modal-button">buy now</label>
                    
                </div>
            </div>
        </div>     
    );
};

export default PurchaseItems;