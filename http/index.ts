import { axiosInstance } from './xhr';

export const registerUser = async (data: { email: string; password: string; username: string }) => {
  return axiosInstance.post('/api/register', data).then((res) => res.data);
};
