<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" class="logo" src="@/assets/hans-logo.svg" width="125" height="125" />
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/upload">Foto hochladen</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  grid-area: header;
  display: flex;
  flex-direction: column;

  .logo {
    justify-content: center;
    display: flex;
  }

  nav {
    text-align: center;

    a{
      padding: 0 5px;
    }
  }
}
</style>
