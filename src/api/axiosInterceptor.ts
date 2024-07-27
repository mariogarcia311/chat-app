import axios, { AxiosRequestConfig, AxiosHeaders } from 'axios';
import { Alert } from 'react-native';

const axiosInterceptor = axios.create();

axiosInterceptor.interceptors.request.use(
  //@ts-ignore
  (config: AxiosRequestConfig) => {
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  },
);

axiosInterceptor.interceptors.response.use(
  response => {
    console.log('respuesta');
    if (response.data.code === '400') {
      console.log('err');
    }
    return response;
  },
  error => {
    if (error.response) {
      const { status, data } = error.response;
      if (data.message) {
        console.error(data.message);

        Alert.alert(
          data.error + ' ' + status,
          typeof data.message === 'string' ? data.message : data.message[0],
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInterceptor;
