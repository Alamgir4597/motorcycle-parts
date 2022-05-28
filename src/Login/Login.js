import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../Hooks/useToken';


const Login = () => {
    
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.form?.pathname || "/";
    const [token] = useToken(user||user1);
useEffect(()=>{
    if (token) {
        navigate('/purchase');
    }
},[token,from,navigate])
    
  
    if(loading||loading1){
        return <button class="btn loading">loading</button>
    }
    
    let signError;
    if(error||error1){
        signError = <p className='text-red-500'>{error?.message ||error1?.message}</p>
    }
    const onSubmit = data =>{ 
       
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-centter'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                                
                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", { required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern:{
                                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message:'Provide a valid  Email'
                                }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.email.message}</span>}
                            </label>
                           
                        </div>
                        <div class="form-control w-full max-w-xs ">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt">{errors.password.message}</span>}
                            </label>


                        </div>
                       

                   {signError}

                        <input class="btn w-full" type="submit" value='Login' />
                    </form>
                    <p> New User? <Link to='/signup'className='text-green-600'>Create Account </Link></p>
            
              <div class="divider ">OR</div> 
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline p-3">Login With Google</button>
                </div>
            </div>
   </div>
    );
};

export default Login;


/*   useEffect(()=>{
        if(token){
            navigate(from ,{replace:true})
        }
    },[token, from,navigate]) */