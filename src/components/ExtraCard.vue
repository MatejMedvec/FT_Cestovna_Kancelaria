
<template>
    <v-col cols="12" md="4" class="mb-3">
      <v-card>
        <img
          :src="image"
          style="width: 100%; height: 200px;"
          class="rounded-5"
          :alt="title"
        />
        <v-card-title class="text-uppercase fw-bold">{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
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



  