import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const RequiredAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user)
   
    let location = useLocation();
    if (loading || adminLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
  if (!user || !admin) {
  
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    return children
};

export default RequiredAdmin;