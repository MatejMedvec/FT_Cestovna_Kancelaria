<template>
    <v-container fluid class="bg-light text-black mt-0">
      <v-row class="p-3">
        <!-- Informácie o stránke -->
        <v-col cols="12" md="4">
          <h5>Informácie o stránke</h5>
          <p>Tu môžete vložiť informácie o vašej stránke.</p>
        </v-col>
        <!-- Ďalšie informácie -->
        <v-col cols="12" md="4">
          <h5>Ďalšie informácie</h5>
          <p>Ďalšie dôležité informácie môžete umiestniť sem.</p>
        </v-col>
        <!-- Kontakt -->
        <v-col cols="12" md="4">
          <h5>Kontakt</h5>
          <p>
            Pre viac informácií nás môžete kontaktovať
            <RouterLink to="/contact" class="text-reset fw-bold">tu</RouterLink>
          </p>
          <ul class="list-unstyled">
            <li>
              <i class="fa-solid fa-phone me-3"></i>
              <a href="tel:+421904116288">+421 904 116 288</a>
            </li>
            <li>
              <i class="fa-solid fa-envelope me-3"></i>
              <a href="mailto:matejmedvec@gmail.com">matejmedvec@gmail.com</a>
            </li>
          </ul>
        </v-col>
      </v-row>

      <!-- Spodná časť -->
      <v-footer color="light" class="text-center py-3">
        <p class="mb-0">© Objavuj Svet. All rights reserved.</p>
      </v-footer>
    </v-container>
  </template>

  <script>
  export default {
    name: 'FooterView',
  };
  </script>

  <style scoped>
  /* Pridanie zarovnania na stred */
  .text-center p {
    text-align: center;
    margin: 0 auto;
  }

  .v-footer {
    justify-content: center;
    align-items: center;
  }
  </style>
