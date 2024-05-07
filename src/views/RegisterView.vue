<template>
  <div class="main-container">
    <header>
      <div class="logo-container">
        <router-link to="/" class="logo">
          <img src="@/assets/dope.jpg" alt="Logo" class="logo-img"/>
        </router-link>
        <div class="napis">DOPE SCORE</div>
      </div>
    </header>
    <div class="Register">
      <div class="Nav-bar">
        <div class="Home-page">
          <RouterLink to="/" class="stronaglowna-link">Strona Główna</RouterLink>
        </div>
        <div class="box">
          <div class="for-free">
            <section class="benefity">
              <h3 class="naglowek-benefitow">Co możemy ci zagwarantować?
              <div class="lista-benefitow">
                <div class="benefit">
                  <div class="benefit-text">Możliwość komentowania</div>
                </div>
                <div class="benefit2">
                  <div class="benefit-text">Zapisuj swoje ulubione zespoły</div>
                </div>
                <div class="benefit3">
                  <div class="benefit-text">Zapisuj swoje mecze</div>
                </div>
              </div>
              </h3>
            </section>
          </div>
          <form class="login-form">
            <div class="form-group">
              <input type="text" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="password" id="password" placeholder="Hasło" required>
            </div>
            <div class="form-group">
              <router-link to="/" class="zarejestruj-link">
                Zarejestruj się
              </router-link>
            </div>
            <div class="go-login">
              <router-link to="/Login" class="zalogujsie-link">
                Masz już konto?
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Ustawienie zawartości w pionie */
  height: 35vh; /* Ustawienie wysokości kontenera na całą wysokość ekranu */
}

.logo-container {
  display: flex;
  align-items: center;
}

header {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  background-color: #222823;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.logo-img {
  width: 100px; /* Ustawienie nowej szerokości logo */
}

.napis {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 100px;
  margin-left: 500px; /* Wyśrodkowanie napisu DOPE SCORE */
}

.Home-page{
  text-align: center;
  margin-top: 20px;
}

.stronaglowna-link {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none; /* Usuwamy podkreślenie */
  border-radius: 10px; /* Zaokrąglamy rogi */
  padding: 10px; /* Dodajemy wewnętrzny odstęp */
  border: 1px solid #ccc; /* Dodajemy obramowanie */
  text-align: center; /* Wyśrodkowanie tekstu */
  cursor: pointer; /* Kursor wskazujący na to, że to aktywny element */
  background-color: darkgreen; /* Kolor tła */
  color: white; /* Kolor tekstu */

}

.login-form {
  width: 500px; /* Szerokość formularza */
}

.form-group {
  margin-bottom: 20px;
  text-align: center;
}

input[type="text"],
input[type="password"] {
  font-family: Arial, Helvetica, sans-serif;
  width: 60%; /* Poszerzamy pola do wpisywania emaila i hasła na 100% szerokości formularza */
  border-radius: 10px; /* Zaokrąglamy rogi */
  padding: 10px; /* Dodajemy wewnętrzny odstęp */
  border: 1px solid #ccc; /* Dodajemy obramowanie */
}

.zarejestruj-link{
  font-family: Arial, Helvetica, sans-serif;
  width: 100%; /* Szerokość przycisku + 2px (ramka) */
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: darkgreen;
  color: white;
  margin-top: 10px;
}

.zalogujsie-link {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%; /* Szerokość przycisku + 2px (ramka) */
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: darkgreen;
  color: white;
  margin-top: 10px;
  margin-left: 195px;
}

.benefity {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
}

.benefit {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.benefit-text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin-top: 10px;
}

.lista-benefitow{
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 50px;
  margin-right: 100px;
}

.naglowek-benefitow{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

</style>

<script setup lang="ts">
</script>