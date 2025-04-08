export const state = () => ({
    products: []
  });
  
  export const mutations = {
    setProducts(state, products) {
      state.products = products;
    }
  };
  
  export const actions = {
    async fetchProducts({ commit }) {
      try {
        const { data } = await this.$api.get('/products');
        commit('setProducts', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };