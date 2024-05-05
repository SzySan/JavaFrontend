<template>
  <div class="Register">
    <div class="Nav-bar">
      <div class="Home-page">
        <RouterLink to="/">Strona Główna</RouterLink>
      </div>
      <div class="Register-For">
        <RouterLink to="/Register">ZAREJESTRUJ SIĘ PO WIĘCEJ</RouterLink>
      </div>
      <div class="box">
        <div class="for-free">
          <div class="examples">
            <span>Możliwość komentowania</span>
            <span>Zapisuj swoje ulubione zespoły</span>
            <span>Zapisuj swoje mecze</span>
          </div>
        </div>
        <div class="email">
          <span>PODAJ EMAIL</span>
        </div>
        <div class="password">
          <span>PODAJ HASŁO</span>
        </div>
        <div class="go-login">
          <a href="/Login">Masz Już Konto</a>
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
</style>