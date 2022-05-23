import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mt-20'>
            <div className='grid gap-5 shrink-0 grid-cols-1 md:grid-cols-2'>
                <div className='w-[100%] md:w-[20%] lg:h-[60vh] shadow-lg'>
                    <ul className='menu text-center'>
                    <li>
                        <NavLink to='/dashboard/addProduct'>Add Product</NavLink>
                        <NavLink to='/dashboard/makeAdmin'>Make Admin</NavLink>
                        <NavLink to='/dashboard/manageAllOrders'>Manage All Orders</NavLink>
                        <NavLink to='/dashboard/manageProducts'>Manage All Orders</NavLink>
                        <NavLink to='/dashboard/myOrders'>My Orders</NavLink>
                        <NavLink to='/dashboard/addReview'>Add Review</NavLink>
                        <NavLink to='/dashboard/myProfile'>My Profile</NavLink>
                    </li>
                    </ul>
                </div>

                <div className='w-[100%] md:w-[60%] '>
                    <h2 className='text-3xl text-center md:text-left mt-5 text-purple-500 font-bold'>Welcome To Dashboard</h2>
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;