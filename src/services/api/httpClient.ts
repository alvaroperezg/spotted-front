import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken } from '@/lib/auth';
import { refreshToken } from "@/services/api/auth/auth";

export const httpClient = axios.create({
  baseURL: '/api',
});

httpClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
