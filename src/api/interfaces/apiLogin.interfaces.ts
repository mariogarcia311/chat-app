export interface LoginApi {
  cellPhone: string;
  countryCode: string;
  userName?: string;
}

export interface LoginApiResponse {
  userId: string;
  status: number;
}

export interface ValidateOtpApi {
  userId: string;
  code: string;
}
export interface ValidateOtpAPIResponse {
  data: Data;
  status: number;
}

export interface Data {
  session: Session;
  token: string;
  user: User;
}

export interface Session {
  __v: number;
  _id: string;
  createdAt: Date;
  device: string;
  updatedAt: Date;
  userId: string;
}

export interface User {
  __v: number;
  _id: string;
  cellPhone: string;
  completePhone: string;
  countryCode: string;
  createdAt: Date;
  description: string;
  enabled: boolean;
  profilePicture: string;
  updatedAt: Date;
  userName: string;
}
