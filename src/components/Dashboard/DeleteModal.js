import React from 'react';

const DeleteModal = ({ tools, deleteProducts }) => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Are Your Sure You Want to Delete Tools?
          </h3>

          <div className="text-center">
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                className="btn btn-error"
                onClick={() => deleteProducts(tools._id)}
              >
                Confirm
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
