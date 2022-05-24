import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../api/constant';

const User = ({ user, index, refetch }) => {
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
        console.log(data);
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
        <button className="btn btn-xs btn-error">Remove User</button>
      </td>
      
      </tr>
     
    
    </>
    
  );
};

export default User;
