import { httpClient } from "../httpClient";
import type { UserCreate, UserCreateResponse } from "@/services/models/User";

export const createUser = async (data: UserCreate): Promise<UserCreateResponse> => {
 try{
    const response = await httpClient.post("/api/v1/users/", data);
    return response.data;
  } catch (error: any) {
    console.error("ERROR DE REGISTRO:", error.response?.data || error.message);
    throw error;
  }
};