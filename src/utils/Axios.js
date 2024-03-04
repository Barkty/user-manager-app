/* eslint-disable no-undef */
import axios from 'axios';

const { REACT_APP_API_URL } = process.env

const API = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
});
  
API.interceptors.request.use((request) => {
    return request;
});
  
API.interceptors.response.use(
    (response) => {
      return response;
    }
);
  
export default API;