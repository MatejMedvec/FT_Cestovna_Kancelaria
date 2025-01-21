<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb :currentView="'gallery'" />

    <!-- Galéria sekcia -->
    <v-row class="text-center">
      <v-col>
        <h2 class="text-reset fw-bold text-uppercase pb-2">Galéria</h2>
      </v-col>
    </v-row>

    <!-- Carousel -->
    <v-row justify="center" class="mb-5">
      <v-col cols="12" md="8">
        <CarouselGallery :slides="slides" />
      </v-col>
    </v-row>

    <!-- Príspevky -->
    <v-row>
      <v-col cols="12" md="4" v-for="(post, index) in posts" :key="index">
        <ImageCard :image="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CarouselGallery from "@/components/CarouselGallery.vue"; // Import Carousel
import ImageCard from "@/components/ImageCard.vue"; // Import ImageCard
import Breadcrumb from "@/components/Breadcrumb.vue"; // Import Breadcrumb
import galleryData from "@/assets/gallery.json"; // Import JSON dát

export default {
  name: "GalleryView",
  components: {
    CarouselGallery,
    ImageCard,
    Breadcrumb,
  },
  data() {
    return {
      slides: galleryData.slides, // Načítavame dáta pre carousel
      posts: galleryData.posts, // Načítavame dáta pre príspevky
    };
  },
};
</script>

<style scoped>
.text-uppercase {
  font-weight: bold;
  text-transform: uppercase;
}

.text-reset {
  color: inherit;
}

.mb-5 {
  margin-bottom: 2rem;
}
</style>











