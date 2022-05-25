import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';


import { baseUrl } from '../../api/constant';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ManageProduct from './ManageProduct';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
    const [tools, setTools] = useState(null);
    
    
    const {
        data: products,
        isLoading,
        refetch,
      } = useQuery('products', () =>
        fetch(`${baseUrl}/tools`, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }).then((res) => res.json())
        );
    const deleteProducts = (id) => {
            
            
                fetch(`${baseUrl}/tools/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                }).then(res => res.json())
                    .then(data => {
                       
                        if (data.deletedCount > 0) {
                            toast.success('Tools Successfully Deleted');
                           
                            refetch();
                          
                   }
                })
            
        }
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-10'>Manage Products{ }</h1>

        <div className='grid mb-10 gap-5 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(tools => <ManageProduct
                
                    key={tools._id}
                    tools={tools}
                    setTools={setTools}
                    deleteProducts={deleteProducts}
                ></ManageProduct>)
                }
                <ToastContainer></ToastContainer>
            </div>
            <DeleteModal
                deleteProducts={deleteProducts}
               tools={tools}
            ></DeleteModal>
    </div>
    );
};

export default ManageProducts;