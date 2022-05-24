import { signOut } from 'firebase/auth';
import React  from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  
  const [createUserWithEmailAndPassword, user2, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const menuItems = (
    <>
      <li>
        <NavLink to="/home" className="rounded-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className="rounded-lg">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="rounded-lg">
          Portfolio
        </NavLink>
      </li>
      {!user && (
        <>
         
          <li>
            <NavLink to="/login" className="rounded-lg">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="rounded-lg">
              Sign Up
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/dashboard" className="rounded-lg">
              Dashboard
            </NavLink>
          </li>

          <span className="mt-3 text-blue-500">{(user ||user2) ? user.displayName : ''}</span>
          <span
            className=" btn  btn-outline  hover:bg-blue-600 hover:text-white font-bold"
            onClick={() => {
              signOut(auth)
              localStorage.removeItem('accessToken')
              navigate('/login');
            }}
          >
            Sign Out
          </span>
        </>
      )}
    </>
  );

  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-100 px-2 shadow-lg py-4 lg:px-20 fixed top-0 z-50">
          <div className="flex-1 px-2 mx-2 text-3xl font-bold italic text-gray-800">
            The Power Tools
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn  btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">
              {menuItems}

              
            </ul>
          </div>
        </div>

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
