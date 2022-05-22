import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import google from '../../images/logo/google logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

import useToken from '../../hooks/useToken';

const Social = (props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // handel google signin
  const handelSocialLogin = () => {
    signInWithGoogle();
  };
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="mt-2">
      <div className="flex justify-center mt-2">
        <button
          onClick={handelSocialLogin}
          className="flex  gap-2 justify-center items-center border bg-[#EFEFEF] py-1"
        >
          <img className="w-8 h-8 " src={google} alt="" />{' '}
          <span className="text-xl pr-2 font-bold">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
