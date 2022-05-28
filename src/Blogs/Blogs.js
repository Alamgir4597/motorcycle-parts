import React, { useState } from 'react';

const Blogs = () => {
    const [searchValue, setSearchValue] = useState('')
    const products = [
        {
            "id": 1,
            "name": "laptop",
            "des": "This is Awesome ",
            "price": 44000
        },
        {
            "id": 2,
            "name": "mobile",
            "des": " good",
            "price": 17000
        },
        {
            "id": 3,
            "name": "headphone",
            "des": "Powerful",
            "price": 1500
        }

    ]
    return (
        <div>
            <div>
                <input placeholder="Enter Product name" onChange={event => setSearchValue(event.target.value)} />
                {
                    products.map((post) => 
                        <div key={post.id}>
                            <p>{post.name}</p>
                           
                        </div>
                    )
                }
            </div>
            <div class="flex flex-col">
                <div className='m-5'>
                    <h3 className='text-2xl'>Improve perfomance react app</h3>
                    <hr></hr>
                 <p>  1.Keeping component state local where necessary.</p>
                      <p>  2. Memoizing React components to prevent unnecessary re-renders.</p>
                      <p>  3. Code-splitting in React using dynamic import</p>
                      <p>  4.Windowing or list virtualization in React.</p>
                  <p>  5.Lazy loading images in React.
                    </p>
                </div>
                <div className='m-5'>

                    <h3 className='text-2xl'>how dose prototypecal inhritace work</h3>
                    <hr></hr>
                    <p>  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>


                    
                </div>
                <div className='m-5'>
                    <h3 className='text-2xl'>what unit test ? why should use unit test</h3>
                    <hr></hr>
                    <p>  Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                   
                </div>
                <div className='m-5'>
                    <h3 className='text-2xl'>different ways to manage a state in a react app</h3>
                    <hr></hr>
                    <h2> There are four main types of state you need to properly manage in your React apps:</h2>

                   <p> 1.Local state <br></br>
                        2.Global state<br></br>
                        3.Server state<br></br>
                    4.URL state
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;