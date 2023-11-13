

// api/axiosInstance.ts 
//  封装axios  token 处理 环境动态切换 错误处理 
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const baseURLs:any = {
  development: 'http://localhost:3000', // 本地开发环境的基本URL
  production: 'https://api.example.com', // 生产环境的基本URL
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURLs[import.meta.env.MODE], // 根据Vite的环境变量动态选择基本URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config:any) => {
    // 在请求发送之前做一些处理，例如添加token等
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在响应成功时做一些处理
    return response.data;
  },
  (error: AxiosError) => {
    // 在响应错误时做一些处理，例如处理401未授权等
    if (error.response?.status === 401) {
      // 处理未授权错误
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;











