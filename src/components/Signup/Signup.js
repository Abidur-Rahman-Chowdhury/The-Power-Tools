import React from 'react';
import './Signup.css';
import signup from '../../images/login-signup/signup.png';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';


import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Social from '../Social/Social';

const Signup = () => {
  // create user with email and pass
  
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // Update profile name 
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  
  const { register,  formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async ({ name, email, password },e) => {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  
  };
  const navigate = useNavigate();

  
//  handel loading
  if (updating || loading) {
     return <LoadingSpinner></LoadingSpinner>
   }
  // handel error message
  let errorMessage;
  if (error || error2) {
    errorMessage = <p className="text-red-700 ml-5 mb-4">{error.message}</p>;
  }
  if (user) {
    navigate('/login');
  }

  return (
    <div className="mt-40 container grid grid-cols-1 md:grid-cols-2 mb-[138px]">
      <div>
        <img src={signup} alt="signupImage" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-[#6C63FF] text-center">
          Sign Up
        </h2>

        <form
          className="signup-form mt-10  p-4 rounded-md shadow-lg "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="input-bordered w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            {...register('name', { required: true })}
            placeholder="Name"
          />
          <p className='pl-5 text-red-500'>{errors.name?.type === 'required' && "Name is required"}</p>

          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
           
          />
          <p className='pl-5 text-red-500'>{errors.email?.type === 'required' && "Email is required"}</p>
          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
            
          />
          <p className='pl-5 text-red-500'>{errors.password?.type === 'required' && "Password is required"}</p>
          <br />
          {error ? errorMessage : ''}
          <p className="mb-4 ml-5">
            Already have and account?{' '}
            <Link to="/login" className="text-[#6C63FF]">
              Please Login
            </Link>{' '}
          </p>

          <div className="pl-6">
            <input
              className="btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md"
              type="submit"
              value="Signup" 
            />
          </div>
          <div className="divider">OR</div>
        <Social></Social>
        </form>
       
      </div>
    </div>
  );
};

export default Signup;
