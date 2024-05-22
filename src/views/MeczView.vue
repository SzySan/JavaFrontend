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
        <div class="team-logo">
          <img :src="selectedFixture.league.logo" style="width: 30px;" :alt="selectedFixture.league.name" />
        </div>
        <div class="league-name">
          {{ selectedFixture.league.name }}
        </div>
        <div class="which-half">
          {{ selectedFixture.fixture.status.long }}
        </div>
        <div class="scoreline">
          <img :src="selectedFixture.teams.home.logo" style="width: 30px;" :alt="selectedFixture.teams.home.logo" />
          <span>{{ selectedFixture.teams.home.name }}</span>
          <span>{{ selectedFixture.goals.home }} : {{ selectedFixture.goals.away }}</span> 
          <span>{{ selectedFixture.teams.away.name }}</span>
          <img :src="selectedFixture.teams.away.logo" style="width: 30px;" :alt="selectedFixture.teams.away.logo" />
        </div>
        <div class="time" style="color: green;">
          {{ selectedFixture.fixture.status.elapsed }} min 
        </div>
        <hr>
      </div>
      <div class="events">
        <div class="event-header">
          Przebieg
        </div>
      </div>
      <div class="events-container">
        <div v-if="selectedFixture && selectedFixture.events">
          <div v-for="event in selectedFixture.events" :key="event.id">
            <template v-if="event.type === 'Goal'">
              <div class="goal-event">
                <img src="@/assets/football.jpg" width="15" alt="GOAL"/>
                <p>{{ event.team.name }} - {{ event.player.name }}</p>
              </div>
            </template>
            <template v-if="event.type === 'Card'">
              <div class="card-event">
                <p>{{ event.team.name }} - {{ event.player.name }} - {{ event.detail }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <style>
  
  .fixture-examples {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .team-logo, .league-name, .which-half, .scoreline, .time {
    margin-bottom: 10px;
  }
  .event-header{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
  }
  .goal-event {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-event {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scoreline {
    display: flex;
    align-items: center;
}

.scoreline img {
    width: 30px;
}

.scoreline span {
    margin: 0 5px; /* Dodaje odstęp poziomy między elementami */
}


  

  

  
  </style>




  