<template>
  <div>
    <div class="go-back">
      <router-link to="/">Strona Główna</router-link>
    </div>
    <form>
      <div class="username">
        <input type="text"  placeholder="Email" required>
      </div>
      <div class="password">
        <input type="password" placeholder="Hasło" required>
      </div>
      <div class="submit">
        <button type="submit">Zaloguj się</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
}

.go-back {
  margin-bottom: 20px;
}
</style>



