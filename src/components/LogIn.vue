<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('username');
const password = ref('password');

const handleLogin = (event) => {
  event.preventDefault(); 

  if (username.value && password.value) {
    router.push('/Dashboard');
  } else {
    alert('Please enter a valid username and password.');
  }
};
</script>

<template>
    <div class="login-wrapper">
      <div class="login-container">
        <h2>Welcome Back!</h2>
        <form @submit="handleLogin">
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              v-model="username"
              required
            />
          </div>
  
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              v-model="password"
              required
            />
          </div>
  
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>

<style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }

  .login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 94vh;
  }

  .login-container {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>