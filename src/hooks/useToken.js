import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../api/constant';

const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
     
      const email =user?.user?.email;
      if (email) {
        const { data } = await axios.post(
         ` ${baseUrl}/login`,
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
      }
    };
    getToken();
  }, [user]);
    return [token];
};

export default useToken;
