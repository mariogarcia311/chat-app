import { AxiosResponse } from 'axios';
import axiosInterceptor from './axiosInterceptor';
import { LoginApi, LoginApiResponse } from './interfaces/apiLogin.interfaces';

const url = `http://localhost:10000`;

export const loginApi = async ({
  cellPhone,
  countryCode,
  userName = '',
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
