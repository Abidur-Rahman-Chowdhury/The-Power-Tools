import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../api/constant';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import DeleteUserModal from './DeleteUser/DeleteUserModal';

import User from './User';


const MakeAdmin = () => {
  const [userInfo, setUserInfo] = useState(null);
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
  const deleteUser = (id) => {

    fetch(`${baseUrl}/user/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('Successfully remove the user!!');
         
          refetch();
        
 }
        
     })
    
  }
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
              <User key={index} user={user} setUserInfo={setUserInfo} index={index} refetch={refetch}></User>
            ))}
          </tbody>
        </table>
        <DeleteUserModal
        deleteUser={deleteUser}
        userInfo ={userInfo}
        ></DeleteUserModal>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MakeAdmin;
