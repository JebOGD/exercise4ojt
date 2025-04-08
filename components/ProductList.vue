<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item" style="border: 1px solid black; padding: 10px; border-radius: 5px; background-color: b;acl;">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
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