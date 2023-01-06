import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { baseUrl } from '../../api/constant';
import auth from '../../firebase.init';
import profile from '../../images/profile/profile.png';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query';


const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const email = user?.email;
  
  const { data: profileData, isLoading , refetch} = useQuery('profileData', () =>
  fetch(`${baseUrl}/getProfile/${email}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  }).then((res) => res.json())
);

  


  const handelUpdateProfile = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const linkedin = e.target.linkedin.value;
    const myProfile = {
      email: user?.email,
      education,
      location,
      phone,
      linkedin,
    };
    fetch(`${baseUrl}/profile/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(myProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Profile information Updated Successfully');
          e.target.reset();
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-blue-500 mt-5">
        Your Profile
      </h2>
      <div className="text-center mt-4">
        <div className="avatar">
          <div className="w-24 rounded-full ">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="card w-[100%] bg-base-100 shadow-xl py-4 px-6">
          <h4 className="text-2xl">
            <b>Name:</b> {user?.displayName}
          </h4>
          <h4 className="text-xl">
            <b>Email:</b> {user?.email}
          </h4>
          {profile && <>
            <h4 className='text-xl'><b>Education:</b> { profileData?.education || 'N/F'  } </h4>
                  <h4 className='text-xl'><b>Location:</b> { profileData?.location || 'N/F'  } </h4>
                  <h4 className='text-xl'><b>Phone Number:</b> { profileData?.phone || 'N/F'}  </h4>
                  <h4 className='text-xl'><b>LinkedIn:</b> <span className='link text-blue-500'>{ profileData?.linkedin}</span> </h4>  
          </>}
         
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <form
          onSubmit={handelUpdateProfile}
          className="mt-10 signup-form  p-4 rounded-md shadow-lg  text-center"
        >
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            name="education"
            placeholder="Your Education"
            required
          />
          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            name="location"
            placeholder="Your Location"
            required
          />
          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            required
          />
          <br />
          <input
            className="border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2"
            type="text"
            name="linkedin"
            placeholder="Your LinkedIn Link"
            required
          />
          <br />

          <div className="pl-6 text-center">
            <input
              className="btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md"
              type="submit"
              value="Update"
            />
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MyProfile;
