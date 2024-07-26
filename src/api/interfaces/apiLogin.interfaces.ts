export interface LoginApi {
  cellPhone: string;
  countryCode: string;
  userName?: string;
}

export interface LoginApiResponse {
  userId: string;
  status: number;
}
