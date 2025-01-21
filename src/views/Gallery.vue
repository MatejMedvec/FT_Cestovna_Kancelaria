<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb :currentView="'gallery'" />

    <!-- Sekcia carousel -->
    <v-row justify="center" class="mb-5">
      <v-col cols="12" md="8">
        <CarouselGallery :slides="slides" />
      </v-col>
    </v-row>

    <!-- Sekcia obľúbené obrázky -->
    <v-row v-if="favorites.length" class="mt-5">
      <v-col cols="12">
        <h2 class="text-reset fw-bold text-uppercase pb-2 text-center">Obľúbené</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="(favorite, index) in favorites" :key="index">
        <ImageCard :image="favorite" @toggle-favorite="toggleFavorite" />
      </v-col>
    </v-row>

    <!-- Sekcia všetkých obrázkov -->
    <v-row class="text-center mt-5">
      <v-col>
        <h2 class="text-reset fw-bold text-uppercase pb-2">Všetky obrázky</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="(post, index) in posts" :key="index">
        <ImageCard :image="post" @toggle-favorite="toggleFavorite" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";
import CarouselGallery from "@/components/Gallery/CarouselGallery.vue";
import ImageCard from "@/components/Gallery/ImageCard.vue";
import galleryData from "@/assets/gallery.json";

export default {
  name: "GalleryView",
  components: {
    Breadcrumb,
    CarouselGallery,
    ImageCard,
  },
  data() {
    return {
      slides: galleryData.slides, // Dáta pre carousel
      posts: galleryData.posts, // Dáta pre všetky obrázky
    };
  },
  computed: {
    // Filter obľúbených obrázkov
    favorites() {
      return this.posts.filter((post) => post.favorite);
    },
  },
  methods: {
    toggleFavorite(image) {
      // Prepnutie stavu obľúbeného
      image.favorite = !image.favorite;
    },
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

.mt-5 {
  margin-top: 2rem;
}

.text-center {
  text-align: center;
}
</style>
















