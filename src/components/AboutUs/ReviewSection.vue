<template>
  <v-row class="my-5 py-5 text-center justify-center">
    <v-col cols="12" md="8">
      <h2 class="text-uppercase fw-bold mb-4">Hodnotenia od klientov</h2>
    </v-col>
    <v-col cols="12" md="6" v-for="(review, index) in reviews" :key="index">
      <v-card class="mb-4">
        <v-card-title class="fw-bold">{{ review.name }}</v-card-title>
        <v-card-text>
          <p>{{ review.review }}</p>
          <div class="d-flex justify-center">
            <!-- Renderovanie hviezdičiek podľa hodnotenia -->
            <v-icon
              v-for="star in 5"
              :key="star"
              color="yellow"
            >
              {{ star <= review.rating ? 'mdi-star' : 'mdi-star-outline' }}
            </v-icon>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ReviewSection",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>





