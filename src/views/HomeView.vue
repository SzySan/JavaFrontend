<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fetchFixtures } from '@/fetch-data';
import { RouterLink } from 'vue-router';
import { data } from '@/lib/dummy-data';
import { PremierLeague } from '@/lib/leagueData';

defineProps({
  msg: {
    type: String,
    required: true
  }
});

const fixtures = ref([]);

const fetchAndUpdateFixtures = async () => {
  try {
    
    fixtures.value = await fetchFixtures();
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
  }
};


let intervalId = null;
onMounted(() => {
  fetchAndUpdateFixtures();
  intervalId = setInterval(fetchAndUpdateFixtures, 30000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<script>

export default {
  data() {
    return {
      leagues: []
    };
  },
  mounted() {
    this.fetchLeagues();
  },
  methods: {
    async fetchLeagues() {
      try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'c84734c28cmsh9c2b59a00998450p1db8cdjsnfd1ce8ad77b4',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        const result = await response.json();
        this.leagues = result.response;
        
      } catch (error) {
        console.error(error);
      }
    },
    getLeagueLogo(league) {
    }
  }
}
</script>

<template>
  <div id="app">
    <header>
      <div class="lewa">
        <img src="@/assets/dope.jpg" alt="Logo" class="logo" />
        <nav>
          <ul>
            <RouterLink to="/Score" class="white-link">Wiadomości</RouterLink>
            <RouterLink to="/Comment" class="white-link">Komentarze</RouterLink>
            <RouterLink to="/League" class="white-link">Ligi</RouterLink>
          </ul>
        </nav>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Podaj Frazę" />
        <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg></button>
      </div>
      <nav>
        <ul>
          <li style="margin-right: 20px;"><RouterLink to="/Login" class="white-link">Login</RouterLink></li>
          <li><RouterLink to="/Register" class="white-link">Rejestracja</RouterLink></li>
        </ul>
      </nav>
    </header>
    
    <div class="main-content">
      <div class="left-sidebar">
        <div class="leagues-container">
          <div class="leagues">
            <span>LIGI</span>
          </div>
        </div>
        <div class="leagues-display">
          <div class="display">
            <div class="display-container">
              <div v-for="league in PremierLeague.response" :key="league.id" class="leagueName">
                <img :src="PremierLeague.response[0].league.logo" alt="Premier League Logo" class="league-logo">
                <RouterLink to="/leagues/PremierLeague">{{PremierLeague.response[0].league.name}}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-bar">
        <div class="feature">
          <div class="feature-display">
              <span>WYNIKI</span>
              <div class="fixture-table">
                <div v-for="fixture in data.response" :key="fixture.id" class="fixture">
                  <RouterLink :to="`/mecz/${fixture.fixture.id}`">
                  <div class="fixture-examples">
                    <div style="align-items: center;">
                      <img :src="fixture.league.logo" style="width: 30px;" :alt="fixture.league.name" />
                      {{fixture.league.name}}
                    </div>
                    <div>
                      {{ fixture.fixture.status.long }}
                    </div>
                    <div>
                      <img :src="fixture.teams.home.logo" style="width: 30px;" :alt="fixture.teams.home.logo" />
                      {{ fixture.teams.home.name }}
                      {{ fixture.goals.home }} : {{ fixture.goals.away }}
                      <img :src="fixture.teams.away.logo" style="width: 30px;":alt="fixture.teams.away.logo" />
                      {{ fixture.teams.away.name }}
                    </div>
                    <div style="color: green;">
                      {{ fixture.fixture.status.elapsed }} min 
                    </div>
                  </div>
                </RouterLink>
                </div>
              </div>
              
          </div>
        </div>
      </div>
      <div class="right-sidebar">
        <div class="news-bar">
          <div class="news">
            <span>ZOBACZ RÓWNIEŻ</span>
          </div>
        </div>
        <div class="przyklad">
          <RouterLink to="/Score" class="black-link">Z ostatniej chwili Lewandowski zmarzł!!!!!!!!!!! :o</RouterLink>
          <RouterLink to="/Score"><img src="@/assets/rupert.png" alt="Logo" class="logo" /></RouterLink>
          <RouterLink to="/Score" class="black-link">Messi nie szyje!!!!!</RouterLink>
          <RouterLink to="/Score"><img src="@/assets/mesi.png" alt="Logo" class="logo" /></RouterLink>
          <RouterLink to="/Score" class="black-link">Mati Borek pokazał swoje kopyto!!!!!</RouterLink>
          <RouterLink to="/Score"><img src="@/assets/poteznybor.png" alt="Logo" class="logo" /></RouterLink>
          <RouterLink to="/Score" class="black-link">Derby dla Lechii !!!</RouterLink>
          <RouterLink to="/Score"><img src="@/assets/derby.jpg" alt="Logo" class="logo" /></RouterLink>
          <RouterLink to="/Score" class="black-link">Arsenal Mistrzem... Prawie!!!!</RouterLink>
          <RouterLink to="/Score"><img src="@/assets/arsenal.jpg" alt="Logo" class="logo" /></RouterLink>
        </div>
      </div>
    </div>
    
  
  </div>

    
</template>

<style scoped>
body, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}


header {
  width: 100%;
  background-color: #222823;
}


header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.lewa {
  display: flex;
  align-items: center;
  
}
.lewa a {
  margin-left: 40px;
  margin-right: 0px;
}

.logo {
  width: 100px;
  height: auto;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
}

nav ul  {
  margin-right: 50px;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
}

nav ul li a:hover {
  color: #ffffff;
}


.search-box {
  justify-content: center;
  
  display: flex;
  width: 50%;
  align-items: center;
}

.search-box input {
  display: inline-block;
  border: 1px solid #707070;
  line-height: 33px;
  border-radius: 17px;
  padding: 0 31px 0 34px;
  color: #3a3a3a;
  min-width: 250px;
  text-transform: uppercase;
}
.search-box button {
  font-size: small;
  width: 30px;
  height: 30px;
  border-radius: 10px;
}

.search-box button:hover {
  color: black;
  background: grey;
}

.search-box input ::placeholder {
  font-size: 30px;
  color: aqua;
  text-transform: capitalize;
}

.search-box i {
  position: flex;
  font-size: 35px;
  font-size: large;
}
.white-link {
  color: white;
}
.left-sidebar {
 
  flex-direction: column;
  padding: 20px;
  width: 250px;
  border: 1px solid grey;
}

.leagues-container {
  margin: auto;
  border: 2px solid #000;
  padding: 10px;
  width: 130px;
  border-radius: 10px
}

.leagues {
  
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  
}
.display span {
  display: block; 
}
.display-container{
  text-align: center;
  margin-top: 20px;
  border: 1px solid black;
  
}
.main-content {
  display: flex;
  height: 100vh; 
}

.middle-bar {
  flex-grow: 1; 
  justify-content: center; 
  border:  1px solid black;
  justify-content: center;
  
}

.feature {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  border: 2px solid #000;
  padding: 10px;
  width: 400px;
  border-radius: 10px
  
}
.feature-display{
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  
}

.right-sidebar {
  flex-direction: column;
  width: 250px; 
  border-right: 1px solid #ccc; 
  border:  1px solid black;
  
}
.news-bar{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  border: 2px solid #000;
  padding: 10px;
  width: 130px;
  border-radius: 10px
}

.news {
  text-align: center;
  align-items: center;
}
.przyklad{
  margin: auto;
  border: 2px solid #000;
  padding: 10px;
  width: 130px;
  border-radius: 10px;
  margin-top: 20px;
  
}
.fixture-table {

  background-color: #ccc; 
  display: grid;
  grid-template-columns: 1fr;
}
.fixture {
  border-bottom: 1px solid black; 
  color: black;
}
.fixture-examples {
  background-color: white;
}
.przyklad .black-link{
  display: block;
    margin-bottom: 10px;
}
.league-logo {
  width: 30px;
  height: auto;
}

</style>