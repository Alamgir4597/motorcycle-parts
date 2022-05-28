import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../PartsToolsHooks/PartsToolsHooks';
import Part from './Part/Part';

const Tools = () => {
    const navigate= useNavigate();
    const[parts, setParts]= useParts([])
  
// console.log(parts)
    const goPurchase=()=>{
        navigate('/purchase')
    }
    const threeItem = parts.slice(0, 8)
    return (
        <div>
            <h2 className='text-5xl font-bold m-5'>Parts</h2>
            <div className='flex flex-wrap items-center justify-content-center' >
               {
                    parts.map(part=> 
                       <div key={part._id} class="card w-96 bg-base-100 shadow-xl  ml-5">
                           <figure><img src={part.img} alt="Shoes" /></figure>
                           <div class="card-body">
                               <h2 class="card-title">
                                   {part.name}
                                   <div class="badge badge-secondary"></div>
                               </h2>
                               <p>{part.description}</p>
                               <div class="card-actions justify-end">
                                   <div class="badge badge-outline">Minimum Order:{part.minqty}</div>
                                   <div class="badge badge-outline">Available :{part.maxqty}</div>
                               </div>
                               <div class="card-actions justify-start">
                                   <div class="badge badge-outline">Unit Price:{part.price}</div>
                                  
                               </div>
                               <button onClick={goPurchase} class="btn btn-primary">Buy Now</button>
                           </div>
                       </div>
                       
                    )
                    
               }
                
                
            </div>
        
        </div>
    );
};

export default Tools;


// parts.map(part => <Part
//     key={part._id}
//     part={part}
// ></Part>)