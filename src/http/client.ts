import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

http.interceptors.request.use(
  (config) => {
    // Add auth tokens or other request logic here
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("HTTP Error:", error);
    return Promise.reject(error);
  }
);
