<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { fetchFixtures } from './fetch-data';

import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import HomeView from './views/HomeView.vue';
import MeczView from './views/MeczView.vue';


  

</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HomeView/> -->

       <nav>
        
      </nav>   
    </div>
  </header>

  <RouterView />
</template>

