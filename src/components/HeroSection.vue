<<<<<<< HEAD
<template>
    <v-row class="text-center my-5 py-5 justify-center">
      <v-col cols="12" md="8">
        <h1>{{ title }}</h1>
        <p class="mt-5">{{ description }}</p>
        <div class="text-center">
          <img
            :src="image"
            :alt="altText"
            class="rounded-5 mb-4 mt-3"
            style="width: 100%; max-width: 800px;"
          />
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
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
      altText: {
        type: String,
        default: "Hero image",
      },
    },
  };
  </script>
  
  <style scoped>
  .rounded-5 {
    border-radius: 15px;
  }
  </style>
=======
<template>
    <v-row class="text-center my-5 py-5 justify-center">
      <v-col cols="12" md="8">
        <h1>{{ title }}</h1>
        <p class="mt-5">{{ description }}</p>
        <div class="text-center">
          <img
            :src="image"
            :alt="altText"
            class="rounded-5 mb-4 mt-3"
            style="width: 100%; max-width: 800px;"
          />
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
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
      altText: {
        type: String,
        default: "Hero image",
      },
    },
  };
  </script>
  
  <style scoped>
  .rounded-5 {
    border-radius: 15px;
  }
  </style>
>>>>>>> c16e87dea396cb738953becbbf49f52494672f22
  