import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../api/constant';

const User = ({ user, index, refetch,setUserInfo }) => {
  const { email, role } = user;
  
  const makeAdmin = () => {
    fetch(`${baseUrl}/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('failed to make an admin');
        }
        return res.json();
      })
      .then((data) => {
       
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made and admin`);
          refetch();
          
        }
      });
  };
  return (
    <>
    <tr>
      <th>{ index +1}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} className="btn btn-xs btn-success">
            Make Admin
          </button>
        )}
      </td>
        <td>
        <label htmlFor="my-modal" onClick={()=> setUserInfo(user)} className="btn modal-button btn-xs btn-error">
        Remove User
      </label>
        {/* <button className="btn "></button> */}
      </td>
      
      </tr>
     
    
    </>
    
  );
};

export default User;
