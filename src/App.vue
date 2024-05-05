<script setup>
import { RouterLink, RouterView } from 'vue-router'

import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HomeView/> -->

      <!-- <nav>
        <RouterLink to="/Login">Login</RouterLink>
      </nav>  -->
    </div>
  </header>

  <RouterView />
</template>

