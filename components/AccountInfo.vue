<template>
  <div class="account-info">
    <h2>Account Information</h2>
    <div v-if="!isEditing">
      <p><strong>Name:</strong> {{ account.name }}</p>
      <p><strong>Email:</strong> {{ account.email }}</p>
      <p><strong>Phone:</strong> {{ account.phone }}</p>
      <p><strong>Address:</strong> {{ account.address }}</p>
      <button @click="isEditing = true" class="btn-primary">Edit</button>
    </div>
    <form v-else @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="account.name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="account.email" />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="account.phone" />
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="account.address" />
      </div>
      <button type="submit" class="btn-primary">Save Changes</button>
      <button type="button" @click="isEditing = false" class="btn-secondary">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const account = ref({
  name: 'Jason Jeb B. Barizo',
  email: 'jasonjebbarizo@gmail.com',
  phone: '09123456789',
  address: '1234 Main St., Quezon City, Philippines'
});

const isEditing = ref(false);

const saveChanges = () => {
  console.log('Account information saved:', account.value);
  isEditing.value = false;
  // Here you can add logic to save the changes, e.g., make an API call
};
</script>

<style scoped>
.account-info {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}


</style>