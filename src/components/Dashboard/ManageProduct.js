import React from 'react';

const ManageProduct = ({ tools, setTools }) => {
  const { _id, name, img, des, minimum, available, price } = tools;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[200px]" src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold mt-2 mb-2">{name}</h2>
        <p className="text-justify text-xl">{des}</p>
        <p className="text-center text-xl">
          <b>Minimum Quantity:</b> {minimum}
        </p>
        <p className="text-center text-xl">
          <b>Available Quantity:</b> {available}
        </p>
        <p className="text-center text-xl">
          <b>Price:</b> ${price}
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="my-modal"
            onClick={() => setTools(tools)}
            className="btn modal-button btn-primary"
          >
            Delete
          </label>
          {/* <button className="btn " >Delete</button> */}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
