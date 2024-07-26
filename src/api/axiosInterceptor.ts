import axios from 'axios';

const axiosInterceptor = axios.create();

axiosInterceptor.interceptors.response.use(
  (response: any) => {
    if (response.data.code === '400') {
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInterceptor;
