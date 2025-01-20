
<template>
    <v-carousel class="my-5" hide-delimiters height="500px">	
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.image">
        <v-row class="text-center">
          <v-col>
            <h5>{{ slide.title }}</h5>
            <p>{{ slide.description }}</p>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script>
  export default {
    name: "Carousel",
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-item {
    background-size: cover;
    background-position: center;
    height: 500px;
  }
  
  .carousel-item img {
    object-fit: cover;
    width: 100%;
    height: 500px;
  }
  </style>


  