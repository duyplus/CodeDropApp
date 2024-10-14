import axios from "axios";
import { appConfig } from "@config";

const axiosInstance = axios.create({
  baseURL: appConfig.apiUrl, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// You can add interceptors here if you need to handle requests or responses globally
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent, like adding authentication token
    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with the response error
    // console.log("@errorerrorerror", error.response);
    return Promise.reject(error);
  }
);

export const setAxiosCustomHeader = (header: string, value: string | null) => {
  if (value) {
    axiosInstance.defaults.headers.common[header] = value;
  } else {
    delete axiosInstance.defaults.headers.common[header];
  }
};

export const getAxiosCustomHeader = (header: string) => {
  return axiosInstance.defaults.headers.common[header];
};

export const setAccessToken = (token: string) => {
  return setAxiosCustomHeader("Authorization", `Bearer ${token}`);
};

export const getAccessToken = () => {
  return getAxiosCustomHeader("Authorization");
};

export { axiosInstance };
