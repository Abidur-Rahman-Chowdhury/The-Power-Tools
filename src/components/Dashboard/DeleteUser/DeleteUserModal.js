import React from 'react';

const DeleteUserModal = ({ userInfo, deleteUser }) => {
    console.log(userInfo);
  return (
    <>
     

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
              <div className="modal-box relative">
              <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
           <h3 className="font-bold text-lg">
           Are you Sure You want to delete the User?
          </h3>
         
          <div className="modal-action">
            <label htmlFor="my-modal" onClick={()=>deleteUser(userInfo._id)} className="btn btn-error">
              Confirm
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUserModal;
