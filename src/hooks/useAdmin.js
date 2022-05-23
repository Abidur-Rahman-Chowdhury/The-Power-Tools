import { useEffect, useState } from 'react';
import { baseUrl } from '../api/constant';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`${baseUrl}/admin/${email}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading, setAdmin];
};
export default useAdmin;
