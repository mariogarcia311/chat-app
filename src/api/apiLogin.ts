import { AxiosResponse } from 'axios';
import axiosInterceptor from './axiosInterceptor';
import {
  LoginApi,
  LoginApiResponse,
  ValidateOtpApi,
  ValidateOtpAPIResponse,
} from './interfaces/apiLogin.interfaces';
import DeviceInfo from 'react-native-device-info';
import { apiUrl } from '@/core/config/config';

const url = apiUrl;

export const loginApi = async ({
  cellPhone,
  countryCode,
  userName = '_',
}: LoginApi): Promise<LoginApiResponse> => {
  const resp: AxiosResponse<LoginApiResponse> = await axiosInterceptor.post(
    `${url}/auth/register`,
    {
      cellPhone,
      countryCode,
      userName,
    },
  );
  return { userId: resp.data.userId, status: resp.status };
};

export const validateOtpApi = async ({
  userId,
  code,
}: ValidateOtpApi): Promise<ValidateOtpAPIResponse> => {
  const deviceId = await DeviceInfo.getUniqueId();

  const resp: AxiosResponse<any> = await axiosInterceptor.post(
    `${url}/auth/validate-otp`,
    {
      userId,
      code,
      device: deviceId,
    },
  );
  return { data: resp.data, status: resp.status };
};
