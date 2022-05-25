import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl } from '../../api/constant';

const AddReview = () => {
  const handelAddReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const review = e.target.review.value;
    const ratings = parseInt(e.target.ratings.value);

    const reviews = {
      name,
      review,
      ratings
      };
     
      fetch(`${baseUrl}/reviews`, {
          method: 'POST',
          headers: {
              "content-type": "application/json",
              "authorization": `Bearer ${localStorage.getItem("accessToken")}`
          },
          body: JSON.stringify(reviews)

      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  toast.success('Review Add Successfully')
                  e.target.reset();
          }
      })
  };
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4">Add Review</h1>
      <div className="w-[80%] mx-auto">
        <form
          onSubmit={handelAddReview}
          className="mt-10 signup-form  p-4 rounded-md shadow-lg  text-center"
        >
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            name="review"
            placeholder="Your Review"
            required
          />
          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="number"
            name="ratings"
            placeholder="Your Ratings"
            required
          />
          <br />
          <div className="pl-6 text-center">
            <input
              className="btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md"
              type="submit"
              value="Add Review"
            />
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default AddReview;
