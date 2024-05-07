<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { data } from '@/lib/dummy-data';

const selectedFixture = ref(null);
const router = useRouter();

const selectFixture = (fixtureID) => {
  selectedFixture.value = data.response.find(fixture => fixture.fixture.id === fixtureID);
}

watch(() => router.currentRoute.value.params.matchID, (newMatchID) => {
  selectFixture(Number(newMatchID));
});

selectFixture(Number(router.currentRoute.value.params.matchID));
</script>

<template>
  <div class="fixture-table">
    <div v-if="selectedFixture" class="fixture">
      <div class="fixture-examples">
        <div style="align-items: center;">
          <img :src="selectedFixture.league.logo" style="width: 30px;" :alt="selectedFixture.league.name" />
          {{ selectedFixture.league.name }}
        </div>
        <div>
          {{ selectedFixture.fixture.status.long }}
        </div>
        <div>
          <img :src="selectedFixture.teams.home.logo" style="width: 30px;" :alt="selectedFixture.teams.home.logo" />
          {{ selectedFixture.teams.home.name }}
          {{ selectedFixture.goals.home }} : {{ selectedFixture.goals.away }}
          <img :src="selectedFixture.teams.away.logo" style="width: 30px;" :alt="selectedFixture.teams.away.logo" />
          {{ selectedFixture.teams.away.name }}
        </div>
        <div style="color: green;">
          {{ selectedFixture.fixture.status.elapsed }} min 
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .mecz {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>




  