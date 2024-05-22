<template>
  <header>
    <div class="logo-container">
      <router-link to="/" class="logo">
        <img src="@/assets/dope.jpg" alt="Logo" class="logo-img"/>
      </router-link>
      <div class="napis"></div>
    </div>
  </header>
  <div class="login-container">
    <div class="go-back" style="text-align:right;">
      <router-link to="/" class="stronaglowna-link">
        Strona Główna
      </router-link>
    </div>
    <div class="napisdwa" style="margin-top: 50px;">
      Zaloguj się przy pomocy istniejącego konta
    </div>
    <form class="login-form">
      <div class="form-group">
        <input type="text" id="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" placeholder="Hasło" required>
      </div>
      <div class="form-group">
        <router-link to="/" class="zalogujsie-link">
          Zaloguj się
        </router-link>
      </div>
    </form>
    <div class="register">
      <label class="napistrzy">Nie masz konta?</label>
      <router-link to="/Register" class="register-link">
        Zarejestruj się
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh; /* Ustawiamy wysokość kontenera na 70% wysokości widoku */
}

.logo-container {
  display: flex;
  align-items: center;
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

.zalogujsie-link {
  font-family: Arial, Helvetica, sans-serif;
  width: 60%; /* Szerokość przycisku zaloguj się */
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: darkgreen;
  color: white;
  margin-top: 10px; /* Dodatkowy odstęp od pola do wpisywania hasła */
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

.register-link {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none; /* Usuwamy podkreślenie */
  border-radius: 10px; /* Zaokrąglamy rogi */
  padding: 10px; /* Dodajemy wewnętrzny odstęp */
  border: 1px solid #ccc; /* Dodajemy obramowanie */
  text-align: center; /* Wyśrodkowanie tekstu */
  cursor: pointer; /* Kursor wskazujący na to, że to aktywny element */
  background-color: green; /* Kolor tła */
  color: white; /* Kolor tekstu */
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
  font-size: 20px;
  margin-left: 500px; /* Wyśrodkowanie napisu DOPE SCORE */
}

.napisdwa {
  font-family: Arial, Helvetica, sans-serif;
  height: 30px;
  margin-top: 10px;
  font-size: 17px;
  cursor: default;
}

.napistrzy {
  font-family: Arial, Helvetica, sans-serif;
}

</style>

<script setup lang="ts">
</script>



