import React from 'react';

const MyOrder = ({ order, index, user }) => {
  const { email, price, img } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{email}</td>
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
          <td><button class="btn btn-xs btn-success mr-2">Pay</button>
          <button class="btn btn-xs btn-error">Cancel</button></td>
          
    </tr>
  );
};

export default MyOrder;
