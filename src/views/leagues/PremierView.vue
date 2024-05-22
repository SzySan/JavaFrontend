<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PremierLeague } from '@/lib/leagueData';
import { PremierLeagueStandings } from '@/lib/leagueData';
import { PremierLeagueTopScorer } from '@/lib/leagueData';

const standings = ref([]);

const topScorers = ref([]);



onMounted(() => {
  standings.value = PremierLeagueStandings.response[0].league.standings[0];
});
onMounted(() => {
  topScorers.value = PremierLeagueTopScorer.response.map(player => ({
    rank: player.statistics[0].team.id,
    name: `${player.player.firstname} ${player.player.lastname}`,
    team: player.statistics[0].team.name,
    goals: player.statistics[0].goals.total,
    assists: player.statistics[0].goals.assists,
    minutes: player.statistics[0].games.minutes,
  }))
});



</script>
<template>
    <div class="PremierLeague">
      <header>
        <div class="lewa">
          <RouterLink to="/">
          <img src="@/assets/dope.jpg" alt="Logo" class="logo" />
          </RouterLink>
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

      <div class="main-context">
        <div class="table-container">
          <div class="table-name">
            <div class="name">
              <span>Premier League</span>
            </div>
            <div class="season">
              <span>2023/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="data-container">
      <table class="data">
        <thead>
          <tr>
            <th>Miejsce</th>
            <th>Nazwa</th>
            <th>GD</th>
            <th>Punkty</th>
            <th>Forma</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in standings" :key="team.rank">
            <td>{{ team.rank }}</td>
            <td>{{ team.team.name }}</td>
            <td>{{ team.goalsDiff }}</td>
            <td>{{ team.points }}</td>
            <td>{{ team.form}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="top-scorers">
      <table class="scorers">
        <thead>
          <tr>
            <th>Miejsce</th>
            <th>Imie I Nazwisko</th>
            <th>Drużyna</th>
            <th>Gole</th>
            <th>Asysty</th>
            <th>Czas na Boisku</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in topScorers" :key="index">
            <th>{{index + 1}}</th>
            <th>{{player.name}}</th>
            <th>{{player.team}}</th>
            <th>{{player.goals}}</th>
            <th>{{player.assists}}</th>
            <th>{{player.minutes}}</th>
          </tr>
        </tbody>
      </table>
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
  .main-context {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 30vh; /* Adjust as needed */
    
  }
  
  .table-container {
    border: 1px solid #ccc; 
    border-radius: 5px; 
    padding: 20px; 
    margin-left: 2%;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  
  .name {
    padding: 10px; 
  }
  
  .name span {
    font-weight: bold; 
    font-size: larger;
  }
  .season {
    padding: 10px;
  }
  .season span {
    font-weight: bold;
    font-size: small;
    display: flex;
    justify-content: center;
    color: red;
  }
  .data-container {
    border: 1px solid #ccc; 
    border-radius: 5px; 
    padding: 20px; 
    margin-left: 2%; 
    width: auto; 
    overflow-x: auto;
  }
  .data {
    width: 100%;
    border-collapse: collapse;
  }
  .data th, .data td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  
  .data th {
    background-color: #f2f2f2;
  }
  
  .data tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  .top-scorers {
    border: 1px solid #ccc; 
    border-radius: 5px; 
    padding: 20px; 
    margin-left: 2%; 
    width: auto; 
    overflow-x: auto;
  }
  .scorers {
    width: 100%;
    border-collapse: collapse;
  }
  .scorers th, .scorers td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  .scorers th {
    background-color: #f2f2f2;
  }

  .scorers tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  



  </style>