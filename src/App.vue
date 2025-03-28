<script setup>

</script>

<template>
  <div style="width: 100vw">
    <div class="navigation-bar">
      <router-link to="/">Log In</router-link>
    </div>

    <div class="centered-components">
      <RouterView></RouterView>
    </div>

  </div>

</template>

<style scoped>

.centered-components {
  text-align: center;
}

.navigation-bar {
    width: 100%;
    height: 50px; 
    background-color: #007bff; 
    display: flex;
    justify-content: right;
    align-items: center; 
    gap: 20px; 
  }

  .navigation-bar a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }

  .navigation-bar a:hover {
    background-color: #0056b3; 
    color: white;
  }

</style>
