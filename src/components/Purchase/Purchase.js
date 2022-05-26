import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../api/constant';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
  const { id } = useParams();
  const [ordersError, setOrdersError] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { data: products, isLoading } = useQuery('products', () =>
    fetch(`${baseUrl}/tools/${id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  const onSubmit = ({ order, phone, address },e) => {
    const orderQuantity = parseInt(order);
    const minimumQuantity = products?.minimum;
    const availableQuantity = products.available;
    if (orderQuantity < minimumQuantity || order < 0) {
      setOrdersError(
        'Order Quantity can not be less than minimum quantity or negative value'
      );
    } else if (orderQuantity > availableQuantity) {
      setOrdersError(
        'Order Quantity can not be greater than available quantity'
      );
    } else {
      const newAvailable = products.available - orderQuantity;
     
      const orders = {
        email: user?.email,
        name: products?.name,
        userName: user?.displayName,
        img: products?.img,
        price: orderQuantity * products?.price,
        status: false,
      };
      fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
         "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => {
         
          if (data.insertedId) {
            toast.success('Successfully place order');
            setOrdersError('')
            e.target.reset();
            fetch(`${baseUrl}/update/tools/${id}`, {
              method: 'PUT',
              headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
              },
              body: JSON.stringify({newAvailable})
            })
              .then(res => res.json())
              .then(data => {
                
              });
          }
        });
    }
  };

  const [user] = useAuthState(auth);

  
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <div className="w-[80%] mx-auto mt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 signup-form  p-4 rounded-md shadow-lg  text-center"
        >
          <span className="text-xl font-bold mr-10">Name:</span>{' '}
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            value={user?.displayName}
            disabled
          />
          <br />
          <span className="text-xl font-bold mr-10">Email:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="email"
            disabled
            value={user?.email}
          />
          <br />
          <span className="text-xl font-bold  mr-10">Tools:</span>{' '}
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            value={products?.name}
            disabled
          />
          <br />
          <span className="text-xl font-bold mr-2">Minimum:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="number"
            value={products?.minimum}
            disabled
          />
          <br />
          <span className="text-xl font-bold mr-2">Available:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="number"
            value={products?.available}
            disabled
          />
          <br />
          <span className="text-xl font-bold mr-10">Price:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="number"
            value={products?.price}
            disabled
          />
          <br />
          <span className="text-xl font-bold mr-10">Order:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="number"
            {...register('order')}
            placeholder="Your Order"
          />
          {<p className="text-red-500">{ordersError}</p>}
          <br />
          <span className="text-xl font-bold mr-10">Phone:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            {...register('phone')}
            placeholder="Your Phone Number"
          />
          <br />
          <span className="text-xl font-bold mr-10">Address:</span>
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            {...register('address')}
            placeholder="Your Address"
          />
          <div className="pl-6 text-center">
            <input
              className="btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md"
              type="submit"
              value="Place Order"
            />
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Purchase;
