<script setup>
import Navbar from './components/Shared/Navbar.vue';
import Footer from './components/Shared/Footer.vue';
</script>

<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container class="main-container">
        <RouterView />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
