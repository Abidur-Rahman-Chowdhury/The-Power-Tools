import React from 'react';

const ManageAllOrder = ({ order, index, handelShift,setOrder, }) => {
    const { _id, name, userName, email, img, status, transactionId, price, shift } = order;
    return (
        <tr>
      <th>{index+1}</th>
            <td>{ userName}</td>
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
            <td>{price}</td>
            <td> {!status && 'Not Paid' }
                {shift && 'Shifted'}
                {(status && !shift) && 'Pending'}
                
            </td>
            <td>{transactionId ? transactionId : ''}</td>
            <td>
            <button className="btn btn-xs btn-success mr-2"  disabled={shift} onClick={()=> handelShift(_id)} >Shift</button>
           <label
            htmlFor="my-modal"
           
                    className=" btn-xs btn-error modal-button btn "
                    onClick={()=>setOrder(order)}
          disabled={shift}
          >
            Cancel
        </label>

             </td>
       </tr>
    );
};

export default ManageAllOrder;