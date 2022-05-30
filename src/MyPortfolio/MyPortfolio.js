import React from 'react';
import car from '../pic/Car.png'
import honda from '../pic/honda.png'
import medicine from '../pic/medicine.png'
const MyPortfolio = () => {
    return (
      
        <div className='grid grid-cols-1 justify-center justify-items-center  '>
            <div >
            <h1>Name: Alamgir Hossain</h1>
            <h1>Email:  Hossain@yahoo.com</h1>
                <h1 className='mb-2'> Education: MBA (Master of Business Administration) National University</h1>
                <div class="collapse">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                       List of Skills
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Bootstrap</p>
                        <p>Tailwind css</p>
                        <p>javascript</p>
                        <p>MongoDB</p>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={car} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Car House</h1>
                        <p class="py-6">Car Buying React Web application</p>
                        <p> many types car collection, user login system with firebase and Also  
                            backend system with mongodb
                        </p>
                        <button class="btn btn-primary"><a
                            target="_blank"
                            
                            href='https://splendorous-centaur-2307c3.netlify.app/'>
                            Go to car House
                        </a></button>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={honda} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Bike review</h1>
                        <p class="py-6">User Bike Review React application</p>
                        <button class="btn btn-primary"><a
                            target="_blank"

                            href='https://peaceful-brioche-178957.netlify.app/'>
                            Go to Bike Review
                        </a></button>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={medicine} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Online Medicine Selling</h1>
                        <p class="py-6">Medicine Selling system Web application</p>
                        <button class="btn btn-primary"><a
                            target="_blank"

                            href='https://remarkable-monstera-ee6a10.netlify.app/'>
                            Go to Medicine Corner
                        </a></button>
                    </div>
                </div>
            </div>
            
        </div>
       
    );
};

export default MyPortfolio;