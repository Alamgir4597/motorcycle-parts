import React, { useState } from 'react';
import useParts from '../PartsToolsHooks/PartsToolsHooks';
import OrderModal from './OrderModal/OrderModal';
import PurchaseItems from './PurchaseItems/PurchaseItems';

const Purchase = () => {
    const[purchase , SetPurchase] = useParts([]);
    const [order, setOrder]= useState(null);
    // console.log(order);
    // console.log(purchase);
   
    return (
        <div>
            <h1 className='text-3xl font-bold m-5'> Purchase</h1>
            <div className="grid grid-cols-4 gap-4 justify-center justify-items-center">
                <div>
                    {
                        purchase.map(p=>
                            <PurchaseItems
                            key={p._id}
                            purchase={p}
                            setOrder={setOrder}
                            >

                            </PurchaseItems>
                            
                            )
                    }
                </div>
               {
                   order && <OrderModal setOrder={setOrder} order={order} ></OrderModal>
               }
                
            </div>
        </div>
    );
};

export default Purchase;