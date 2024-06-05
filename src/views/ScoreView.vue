<template>
  <div id="app">
    <header>
      <div class="lewa">
        <img src="@/assets/dope.jpg" alt="Logo" class="logo" />
        <nav>
          <ul>
            <RouterLink to="/" class="white-link">Strona Główna</RouterLink>
            <RouterLink to="/Comment" class="white-link">Komentarze</RouterLink>
          </ul>
        </nav>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Podaj Frazę" />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
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
              <span>Premier League</span>
              <span>La Liga</span>
              <span>Ekstraklasa</span>
              <span>Ligue 1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-bar">
        <div class="feature">
          <div class="feature-display">
            <span>Wiadomości z ostatniej chwili</span>
          </div>
          <div class="message-input">
            <img src="@/assets/rupert.png" alt="Logo" class="logo" />
            <textarea>
Drodzy Kibice,
Z przykrością informujemy, że nasz niezrównany kapitan, Robert Lewandowski, podczas dzisiejszego treningu doświadczył trudnych warunków pogodowych i bardzo zmarzł. Ten nagły spadek temperatury sprawił, że trening był dla niego wyjątkowo ciężki i niekomfortowy.
Robert, jak zawsze, dał z siebie wszystko, jednak dzisiejsze warunki były wyjątkowo trudne. Prosimy Was o wyrozumiałość i wsparcie dla niego w tym czasie. Jego determinacja i pasja są dla nas wszystkich inspiracją, a my wszyscy wiemy, jak bardzo zależy mu na drużynie i kibicach.
Chcemy jednak uspokoić wszystkich - nie chodzi tutaj o żadne poważne konsekwencje zdrowotne. Robert po prostu zmarzł i potrzebuje teraz ciepła i odpoczynku, by szybko wrócić do pełni sił.
            </textarea>
            <img src="@/assets/mesi.png" alt="Logo" class="logo" />
            <textarea>
SZOK! Messi nie szyje! Sprawdź, Co Się Stało! 🚨
To, co wydarzyło się niedawno, wprawiło wszystkich w osłupienie! Lionel Messi, którego talent do gry w piłkę nożną zna cały świat, postanowił zawiesić swoją niespodziewaną pasję do... szycia! Tak, dobrze słyszycie! Nasz ulubiony gwiazdor, który od jakiegoś czasu zaskakiwał wszystkich swoimi umiejętnościami krawieckimi, nagle zrezygnował z tego zajęcia. Co go do tego skłoniło?
            </textarea>
            <img src="@/assets/derby.jpg" alt="Logo" class="logo2" />
            <textarea>
Lechia Gdańsk po raz kolejny udowodniła swoją przewagę nad Arką w emocjonującym starciu derbowym Trójmiasta. Mimo niekorzystnej sytuacji, gdy jednego z ich graczy usunięto z boiska w 30. minucie, Lechia zachowała kontrolę nad grą i ostatecznie sięgnęła po zasłużone zwycięstwo. To nie tylko dowód na jakość piłkarską Lechii, ale także na ich silny charakter i zdolność do radzenia sobie z trudnościami. Ich determinacja przyniosła im kolejne triumfujące chwile na arenie lokalnych derbów.
            </textarea>
            <img src="@/assets/arsenal.jpg" alt="Logo" class="logo3" />
            <textarea>
Arsenal, znany z czasem od czasu załamań na boisku, tym razem zaserwował swoim kibicom prawdziwą niespodziankę. W dramatycznym zakończeniu sezonu zdarzyło im się wyjątkowo nietypowe - zepsuli wszystko dosłownie metr przed metą. To tak jakby kierowca rajdowy uderzył w drzewo tuż przed linią mety! Jak to możliwe?
Wynik? Przegrali mistrzostwo Anglii. Ale nie martwcie się, fani Kanonierów, zawsze możecie trzymać się swojego ulubionego powiedzenia: "Lepiej zesrać się metr przed kiblem niż pięć kilometrów wcześniej".
A co do porównania z Man Utd... Cóż, nawet w swoich najgorszych chwilach Arsenal zawsze może powiedzieć, że są lepsi od Czerwonych Diabłów.
            </textarea>
          </div>
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

.logo2{
  width: 100px;
  height: 75px;
  margin-bottom: 20px;
}

.logo3{
  width: 100px;
  margin-bottom: 20px;
  height: 75px;
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
  /* Odsunięcie od marginesu */
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
  justify-content: center;
}

.feature {
  margin-top: 20px;
  border: 2px solid #000;
  padding: 10px;
  width: 90%;
  border-radius: 10px
}

.feature-display{
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  align-items: center;
}

.message-input {
  margin-top: 20px;
  text-align: center;
}

.message-input textarea {
  width: 90%;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
}

.message-input button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

.message-input button:hover {
  background-color: #45a049;
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



</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>