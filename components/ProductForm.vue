// filepath: c:\Users\Guest1\Documents\Projects\merchant\components\ProductList.vue
<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>