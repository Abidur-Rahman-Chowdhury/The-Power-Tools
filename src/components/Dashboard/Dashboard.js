import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './Dashboard.css'
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="mt-20 mb-[280px]">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="dashboard-menu flex-grow-3 lg:h-[60vh] shadow-lg">
          <ul className="menu text-center">
                      {
                          !admin && <>
                          <li>
              <Link  className='hover:bg-[#570DF8] hover:text-white' to="/dashboard/myOrders">My Orders</Link>
            </li>
            <li>
              <Link  className='hover:bg-[#570DF8] hover:text-white' to="/dashboard/addReview">Add Review</Link>
            </li>
                          
                          </>
            }
            <li>
              <Link  className='hover:bg-[#570DF8] hover:text-white' to="/dashboard">My Profile</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link  className='hover:bg-[#570DF8] hover:text-white'  to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link  className='hover:bg-[#570DF8] hover:text-white' to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link  className='hover:bg-[#570DF8] hover:text-white' to="/dashboard/manageAllOrders">
                    Manage All Orders
                  </Link>
                </li>
                <li>
                  <Link  className='hover:bg-[#570DF8] hover:text-white' to="/dashboard/manageProducts">
                    Manage Product
                  </Link>
                </li>
              </>
            )}
          </ul> 
        </div>

        <div className="w-[100%] md:dashboard-content ">
          <h2 className="text-3xl text-center  mt-5 text-purple-500 font-bold">
            Welcome To Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
