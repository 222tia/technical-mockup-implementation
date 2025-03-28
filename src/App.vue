<script setup>

</script>

<template>
  <div style="width: 100vw">
    <div class="navigation-bar">
      <router-link to="/Dashboard">Dashboard</router-link>
      <router-link to="/CreateChore">Create Chore</router-link>
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
    height: 50px; /* Adjusted height for better visibility */
    background-color: #007bff; /* Blue background */
    display: flex;
    justify-content: right; /* Center the items */
    align-items: center; /* Vertically center the links */
    gap: 20px; /* Space between navigation links */
  }

  .navigation-bar a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }

  /* Hover effect for links */
  .navigation-bar a:hover {
    background-color: #0056b3; /* Darker blue when hovered */
    color: white;
  }

</style>
