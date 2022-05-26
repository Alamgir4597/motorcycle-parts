import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h3 className='text-5xl text-green-400  font-bold'>Your Dashboard</h3>
               <Outlet></Outlet>
               
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/addparts'>Add a Part</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;