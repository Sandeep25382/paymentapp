import axios from '../axiosInstance';
import {LoginRequest, AuthResponse} from '../../types/auth';
import {setTokens, clearTokens} from '../../utils/tokenManager';

export const loginUser = async (
  payload: LoginRequest,
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>('/auth/login', payload);

  const {accessToken, refreshToken} = response.data;
  await setTokens(accessToken, refreshToken);

  return response.data;
};

export const logoutUser = async (): Promise<void> => {
  try {
    await axios.post('/auth/logout');
  } finally {
    await clearTokens();
  }
};
