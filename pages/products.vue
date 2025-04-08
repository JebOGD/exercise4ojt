<template>
  <div class="products-page">
    <h1>Products</h1>
    <ProductList :products="products" />
  </div>
</template>

<script setup>
import { useProductStore } from '~/store/index.js';
import { onMounted, computed } from 'vue';
import ProductList from '~/components/ProductList.vue';

const productStore = useProductStore();
const products = computed(() => productStore.products);

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped>
.products-page {
  padding: 20px;
}

.products-page h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.products-page .product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>