import React from 'react';

import { baseUrl } from '../../api/constant';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const handelAddProducts = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const des = e.target.des.value;
    const minimum = parseInt(e.target.minimum.value);
    const available = parseInt(e.target.available.value);
    const price = parseInt(e.target.price.value);

    const tools = {
      name,
      img,
      des,
      minimum,
      available,
      price,
      };
      
      fetch(`${baseUrl}/tools`, {
          method: 'POST',
          headers: {
              "content-type": "application/json",
               "authorization": `Bearer ${localStorage.getItem("accessToken")}`
          },
          body: JSON.stringify(tools)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  toast.success('Tools Successfully Added');
                  e.target.reset();
          }
      })
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-5 mt-5">Add Tools</h2>
      <div className="w-[80%] mx-auto">
        <div className="card w-[60%] bg-base-100 shadow-xl mx-auto mt-10">
          <div className="card-actions">
            <form className="w-[60%] mx-auto pt-4" onSubmit={handelAddProducts}>
              <input
                className="w-full h-8 border-2 rounded-lg px-4 mb-4"
                placeholder="Name"
                type="text"
                name="name"
                id=""
              />

              <input
                className="w-full h-8 border-2 rounded-lg px-4 mb-4"
                placeholder="Image URL"
                type="text"
                name="img"
                id=""
              />
              <input
                className="w-full h-8 border-2 rounded-lg px-4 mb-4"
                placeholder="Description"
                type="text"
                name="des"
                id=""
              />
              <input
                className="w-full h-8 border-2 rounded-lg px-4 mb-4"
                placeholder="Minimum Quantity"
                type="number"
                name="minimum"
                id=""
              />
              <input
                className="w-full h-8 border-2 rounded-lg px-4 mb-4"
                placeholder="Available Quantity"
                type="number"
                name="available"
                id=""
              />
              <input
                className="w-full h-8 border-2 rounded-lg px-4 mb-4"
                placeholder="Price"
                type="number"
                name="price"
                id=""
              />
              <div className="text-center">
                <input
                  type="submit"
                  className="btn mb-4 btn-outline"
                  value="Add Tools"
                />
              </div>
                      </form>
                      <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
