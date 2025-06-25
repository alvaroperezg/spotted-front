// src/lib/auth.ts
import { jwtDecode } from "jwt-decode";

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

export const setToken = (token: string) => {
  localStorage.setItem("spotted_token", token);
};

export const getToken = () => {
  return localStorage.getItem("spotted_token");
};

export const removeToken = () => {
  localStorage.setItem("spotted_token", "");
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
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
  const token = getToken();
  if (!token) return null;
  
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.user;
  } catch (error) {
    return null;
  }
};