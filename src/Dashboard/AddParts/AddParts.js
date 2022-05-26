import React from 'react';
import { useForm } from 'react-hook-form';

const AddParts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgStorageKey = '93b7002607c8cd3e7ea054c7252b1db3';
    const onSubmit = async data => {
        console.log(data);
        const image=data.image[0];
        const formData= new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img=result.data.url;
                const add={
                    name:data.name,
                    minqty: data.minqty,
                    maxqty: data.maxqty,
                    price: data.price,
                    description: data.description,
                    img:img
                }

                fetch('http://localhost:5000/addpart', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(add)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) {
                            alert('Product add is Success')
                        }
                    })
            }
        })
        



       
};
    return (
        <div className='flex  justify-start items-centter'>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Parts Name</span>

                    </label>
                    <input type="text" placeholder="Enter Parts Name" class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                 </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum Order Quantity</span>

                    </label>
                    <input type="number" placeholder="Quantity" class="input input-bordered w-full max-w-xs"
                        {...register("minqty", {
                            required: {
                                value: true,
                                message: 'Value is Required'
                            }
                        })}
                    />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Available Quantity</span>

                    </label>
                    <input type="number" placeholder="Quantity" class="input input-bordered w-full max-w-xs"
                        {...register("maxqty", {
                            required: {
                                value: true,
                                message: 'Value is Required'
                            }
                        })}
                    />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>

                    </label>
                    <input type="text" placeholder="Enter Description" class="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Unit Price</span>

                    </label>
                    <input type="number" placeholder="Enter Price" class="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Value is Required'
                            }
                        })}
                    />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">image</span>

                    </label>
                    <input type="file" placeholder="upload" class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            },
                           
                        })}
                    />
                    

                </div>
                


                
                <input class="btn btn-outline mt-3" type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddParts;