import React from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { baseUrl } from '../../api/constant';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import User from './User';


const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch(`${baseUrl}/user`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={index} user={user} index={index} refetch={refetch}></User>
            ))}
          </tbody>
              </table>
              <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MakeAdmin;
