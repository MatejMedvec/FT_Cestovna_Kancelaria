<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <!-- Navigačný panel -->
    <Navbar />

    <!-- Hlavný obsah -->
    <v-main>
      <v-container class="main-container">
        <RouterView />
      </v-container>
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<style scoped>
.main-container {
  max-width: 1200px; /* Maximálna šírka stránky */
  margin: 0 auto;   /* Centrovanie obsahu */
  padding: 0 16px;  /* Priestor po stranách */
}
</style>



