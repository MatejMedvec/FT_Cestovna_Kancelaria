<template>
    <v-col cols="12" md="4" class="mb-4">
      <v-card>
        <v-img :src="image" height="200px" :alt="title"></v-img>
        <v-card-title class="fw-bold">{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
      </v-card>
    </v-col>
  </template>

  <script>
  export default {
    name: "PostCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  };
  </script>



