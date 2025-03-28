<template>
    <div class="add-chore-page">
        <h2>Add a New Chore</h2>
        
        <div class="input-group">
            <label for="chore-name">Chore Name</label>
            <input type="text" id="chore-name" v-model="choreName" placeholder="Enter chore name" />
        </div>
    
        <div class="input-group">
            <label>Days to Complete</label>
            <div class="days-checkboxes">
            <label v-for="day in days" :key="day">
                <input type="checkbox" :value="day" v-model="selectedDays" />
                {{ day }}
            </label>
            </div>
        </div>
    
        <div class="input-group">
            <label for="vigorousness">Vigorousness</label>
            <input
            type="range"
            id="vigorousness"
            min="1"
            max="10"
            v-model="vigorousness"
            step="1"
            />
            <span>{{ vigorousness }}</span>
        </div>
    
        <div class="input-group">
            <label for="roommate">Assign Roommate</label>
            <select v-model="assignedRoommate">
            <option v-for="roommate in roommates" :key="roommate.id" :value="roommate.name">
                {{ roommate.name }}
            </option>
            </select>
        </div>
    
        <div class="input-group">
            <button @click="randomizeRoommate">Randomize Roommate</button>
        </div>
    
        <div class="submit-button">
            <router-link to="/Dashboard">
                <button>Save</button>
            </router-link>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const choreName = ref('');
  const vigorousness = ref(5);
  const selectedDays = ref([]);
  const assignedRoommate = ref('');
  const roommates = ref([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
 
  const randomizeRoommate = () => {
    const randomIndex = Math.floor(Math.random() * roommates.value.length);
    assignedRoommate.value = roommates.value[randomIndex].name;
  };
  </script>
  
  <style scoped>
  .add-chore-page {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 8px;
  }
  
  .input-group input,
  .input-group select,
  .input-group button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    margin-top: 5px;
  }
  
  .input-group input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
  }
  
  .days-checkboxes {
    display: flex;
    flex-wrap: wrap;
  }
  
  .days-checkboxes label {
    margin-right: 10px;
  }
  
  .submit-button {
    text-align: center;
  }
  
  .submit-button button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .submit-button button:hover {
    background-color: #45a049;
  }
  </style>