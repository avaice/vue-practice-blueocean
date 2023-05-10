<template>
  <header>
    <p class="logo">🏄‍♂️</p>
    <nav>
      <RouterLink to="/" class="header-link">🏠 Home</RouterLink>
      <RouterLink to="/discover" class="header-link">👀 Discover</RouterLink>
      <RouterLink to="/me" class="header-link">☺️ Me</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 250px;
  height: 100%;
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  font-size: 48px;
}
.header-link {
  display: block;
  line-height: 50px;
  background-color: white;
  text-decoration: none;
  color: black;
  font-size: 24px;
  margin: 10px;
  padding: 0 15px;
  border-radius: 30px;
}
.header-link:hover {
  background-color: var(--color-hover);
}
</style>
