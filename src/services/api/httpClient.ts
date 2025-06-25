import axios from "axios"

export const httpClient = axios.create({
  baseURL: "/api", // usa el proxy
})

httpClient.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token") 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
