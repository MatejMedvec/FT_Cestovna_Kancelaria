<template>
  <v-col cols="12" sm="6" md="4" class="mb-4">
    <v-card
      class="extra-card"
      elevation="2"
      hover
    >
      <v-img
        :src="image"
        :alt="title"
        class="extra-card-image"
        height="200"
        cover
      ></v-img>
      <v-card-title class="text-uppercase fw-bold text-center">
        {{ title }}
      </v-card-title>
      <v-card-text class="text-center">
        {{ description }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ExtraCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.extra-card {
  border-radius: 16px; /* Zaoblenie celej karty */
  overflow: hidden; /* Obrázok rešpektuje zaoblenie */
  transition: transform 0.3s, box-shadow 0.3s; /* Plynulé animácie pri hover */
}

.extra-card:hover {
  transform: translateY(-5px); /* Jemné zdvihnutie karty */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Tieň pri hover */
}

.extra-card-image {
  border-radius: 16px 16px 0 0; /* Zaoblenie iba horných rohov obrázka */
  object-fit: cover; /* Obrázok sa prispôsobí bez deformácie */
}

.text-uppercase {
  letter-spacing: 1px; /* Väčší rozostup písmen */
  margin-bottom: 8px; /* Medzera pod názvom */
}

.text-center {
  text-align: center; /* Zarovnanie textu na stred */
}
</style>


