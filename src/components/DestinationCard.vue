<template>
    <v-col cols="12" md="4" class="mb-3">
      <v-card>
        <img
          :src="image"
          class="rounded-5"
          style="width: 100%; max-height: 200px;"
          :alt="name"
        />
        <v-card-title class="text-uppercase fw-bold">{{ name }}</v-card-title>
        <v-card-text>
          <div class="d-flex justify-space-between align-items-center">
            <RouterLink to="/book" class="btn btn-primary">Rezervovať</RouterLink>
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
  