import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

function cretaeInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

//axios 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = cretaeInstance();
export const posts = createInstanceWithAuth('posts');
