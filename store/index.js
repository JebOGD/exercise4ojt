import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
});