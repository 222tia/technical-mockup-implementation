<script setup>
import { ref } from 'vue';

const chores = ref([
  {
    id: 1,
    name: 'Clean the Kitchen',
    days: ['Monday', 'Wednesday', 'Friday'],
    completed: [],
    user: null,
  },
  {
    id: 2,
    name: 'Take out the Trash',
    days: ['Tuesday', 'Thursday'],
    completed: [],
    user: null,
  },
  {
    id: 3,
    name: 'Do the Laundry',
    days: ['Monday', 'Saturday'],
    completed: [],
    user: null,
  },
  {
    id: 4,
    name: 'Mop the Floor',
    days: ['Sunday', 'Thursday'],
    completed: [],
    user: null,
  },
]);

const users = ref([
  { id: 1, name: 'User 1', icon: '👩‍💻', completedChores: 0 },
  { id: 2, name: 'User 2', icon: '👨‍💻', completedChores: 0 },
  { id: 3, name: 'User 3', icon: '👩‍🎓', completedChores: 0 },
]);

// Handle completion of chore on specific days
const handleCheck = (chore, day, user) => {
  const dayIndex = chore.completed.findIndex((entry) => entry.day === day);
  if (dayIndex === -1) {
    chore.completed.push({ day, user: user.name });
    chore.user = user.name;
    user.completedChores += 1;
  }
};

</script>

<template>

    <div class="dashboard">
        <div class="header">
            <div class="user-icons">
                <div v-for="user in users" :key="user.id" class="user-icon">
                <span>{{ user.icon }}</span>
                <span>{{ user.name }}</span>
                </div>
            </div>
        </div>

        <div style="text-align: left;">
            <h3>Chores</h3>
        </div>
        <div class="main-content">
        <div class="chores">
            <div class="chores-list">
                <div
                    class="chore-card"
                    v-for="chore in chores"
                    :key="chore.id"
                >
                    <h4>{{ chore.name }}</h4>
                    <div class="chore-days">
                        <div v-for="day in chore.days" :key="day" class="day-checkbox">
                            <label>{{ day }}</label>
                            <input
                            type="checkbox"
                            :checked="chore.completed.some(entry => entry.day === day)"
                            @change="handleCheck(chore, day, users[0])" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Leaderboard -->
        <div class="leaderboard">
            <h3>Leaderboard</h3>
            <div v-for="user in users" :key="user.id" class="leaderboard-item">
            <div class="leaderboard-user">
                <span>{{ user.icon }}</span>
                <span>{{ user.name }}</span>
            </div>
            <span>{{ user.completedChores }} chore(s) completed</span>
            </div>
        </div>
        </div>
    </div>

</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.user-icons {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.user-icon {
  text-align: center;
}

.user-icon span {
  display: block;
}

.main-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.chores {
  width: 70%;
  max-height: 300px;
  overflow-y: auto;
}

.chores-list {
  display: flex;
  flex-direction: column;
}

.chore-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #f1f1f1;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
}

.chore-days {
  display: flex;
  flex-wrap: wrap; /* Allows checkboxes to wrap horizontally when necessary */
  gap: 10px; /* Space between checkboxes */
}

.day-checkbox {
  display: flex;
  align-items: center;
  gap: 5px; /* Space between checkbox and day label */
}

.day-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.leaderboard {
  width: 25%;
  max-height: 300px;
  overflow-y: auto;
}

.leaderboard-item {
  background: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.leaderboard-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.leaderboard-user span {
  display: block;
}
</style>
