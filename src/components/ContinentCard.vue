<template>
    <v-col cols="12" md="4" class="text-center py-3">
      <i :class="icon" class="fa-2x"></i>
      <h2 :class="color + ' fw-bold text-uppercase pb-2'">{{ name }}</h2>
      <p>{{ description }}</p>
    </v-col>
  </template>

  <script>
  export default {
    name: "ContinentCard",
    props: {
      name: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      color: {
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
