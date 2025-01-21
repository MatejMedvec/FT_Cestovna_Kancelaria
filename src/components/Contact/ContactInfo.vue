<template>
  <v-row class="my-5">
    <v-col cols="12" md="4" class="text-center">
      <v-icon color="primary" size="36">mdi-phone</v-icon>
      <p><strong>Telefón:</strong> +421 904 123 456</p>
    </v-col>
    <v-col cols="12" md="4" class="text-center">
      <v-icon color="primary" size="36">mdi-email</v-icon>
      <p><strong>E-mail:</strong> info@example.com</p>
    </v-col>
    <v-col cols="12" md="4" class="text-center">
      <v-icon color="primary" size="36">mdi-map-marker</v-icon>
      <p><strong>Adresa:</strong> Hlavná 123, Bratislava</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>
