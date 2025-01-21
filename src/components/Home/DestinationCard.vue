<template>
  <v-col cols="12" sm="6" md="4" class="mb-4">
    <v-card
      class="destination-card"
      elevation="2"
      hover
    >
      <v-img
        :src="image"
        :alt="name"
        class="destination-image"
        height="200"
        cover
      ></v-img>
      <v-card-title class="text-uppercase fw-bold text-center">
        {{ name }}
      </v-card-title>
      <v-card-text class="text-center">
        <div class="d-flex justify-space-between align-items-center">
          <RouterLink to="/book" class="btn btn-primary rounded-pill">
            Rezervovať
          </RouterLink>
          <p class="mb-0">od <strong>{{ price }} €</strong></p>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "DestinationCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.destination-card {
  border-radius: 16px; /* Zaoblenie celej karty */
  overflow: hidden; /* Aby obrázok rešpektoval zaoblenie */
  transition: transform 0.3s, box-shadow 0.3s; /* Animácie pre hover */
}

.destination-card:hover {
  transform: translateY(-5px); /* Zdvihnutie pri hover */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Tieň pri hover */
}

.destination-image {
  border-radius: 16px 16px 0 0; /* Zaoblenie iba horných rohov obrázka */
  object-fit: cover; /* Prispôsobenie obrázka bez deformácie */
}

.text-uppercase {
  letter-spacing: 1px; /* Väčší rozostup písmen */
}

.btn {
  font-weight: bold; /* Zvýraznenie tlačidla */
}
</style>


