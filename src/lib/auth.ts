import { jwtDecode } from "jwt-decode";
const TOKEN = "spotted_token";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: "surfer" | "photographer";
  // Add other user properties
}

interface DecodedToken {
  sub: string;
  exp: number;
  user: UserData;
}

export const setAccessToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN);
};

export const removeAccessToken = () => {
  localStorage.setItem(TOKEN, "");
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(TOKEN);
};

export const isAuthenticated = (): boolean => {
  const token = getAccessToken();
  if (!token) return false;
  
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const getCurrentUser = (): UserData | null => {
  const token = getAccessToken();
  if (!token) return null;
  
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.user;
  } catch (error) {
    return null;
  }
};