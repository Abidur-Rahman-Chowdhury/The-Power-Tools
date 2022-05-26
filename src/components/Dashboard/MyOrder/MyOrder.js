import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrder = ({ order, index, user }) => {
    const { _id, email, price, img,name, status,transactionId } = order;
    const navigate = useNavigate()
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img
              src={img}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
          <td>{ price}</td>
      <td className={`${(status ? 'text-success font-bold' : '')}`}>{status ? 'Paid' : 'Not Paid'}</td>
      <td>{ status ? transactionId : ''  }</td>
          <td><button class="btn btn-xs btn-success mr-2" onClick={()=>navigate(`/dashboard/payment/${_id}`) } disabled={status}>Pay</button>
          <button class="btn btn-xs btn-error" disabled={status}>Cancel</button></td>
          
    </tr>
  );
};

export default MyOrder;
