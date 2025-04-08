import axios from 'axios';

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
  });

  return {
    provide: {
      api
    }
  };
});