import axios from 'axios'
import { Toast } from 'antd-mobile'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
  Toast.loading('加载中',0)
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
  Toast.hide()
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});