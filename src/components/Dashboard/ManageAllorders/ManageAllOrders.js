import React from 'react';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../../api/constant';
import ManageAllOrder from './ManageAllOrder';
import 'react-toastify/dist/ReactToastify.css';

const ManageAllOrders = () => {
  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery('allOrders', () =>
    fetch(`${baseUrl}/get/orders`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  const handelShift = (id) => {
    fetch(`${baseUrl}/shift/order/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
          if (data.modifiedCount > 0) {
              toast.success('Product Successfully Shifted');
              refetch();
        }
      });
  };
  return (
    <>
      <h2 className="text-center text-3xl mt-5 mb-5 font-bold">My Orders </h2>
      <h2 className="text-center text-2xl mt-5 mb-5 font-bold">
        {' '}
        Total Orders: {allOrders?.length}{' '}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Tools</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Transaction ID</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order, index) => (
              <ManageAllOrder
                index={index}
                key={order._id}
                order={order}
                handelShift={handelShift}
              ></ManageAllOrder>
            ))}
          </tbody>
        </table>
        {/* <CancelOrdersModal
          product={product}
          cancelProduct={cancelProduct}
        ></CancelOrdersModal>
        <ToastContainer></ToastContainer> */}
              <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default ManageAllOrders;
