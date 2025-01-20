<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb currentView="gallery" />

    <!-- Galéria sekcia -->
    <v-row class="text-center">
      <v-col>
        <i class="fa-solid fa-earth-americas fa-2x"></i>
        <h2 class="text-reset fw-bold text-uppercase pb-2">Galéria</h2>
      </v-col>
    </v-row>

    <!-- Carousel -->
    <Carousel :slides="slides" />

    <!-- Príspevky sekcia -->
    <v-row class="text-center">
      <v-col>
        <i class="fa-solid fa-earth-americas fa-2x"></i>
        <h2 class="text-reset fw-bold text-uppercase pb-2">Príspevky</h2>
      </v-col>
    </v-row>
    <v-row>
      <PostCard
        v-for="(post, i) in posts"
        :key="i"
        :title="post.title"
        :description="post.description"
        :image="post.image"
      />
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "@/components/CarouselGallery.vue";
import PostCard from "@/components/PostCard.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import galleryData from "@/assets/gallery.json";
import breadcrumbData from "@/assets/breadcrumb.json";

export default {
  name: "Gallery",
  components: {
    Carousel,
    PostCard,
    Breadcrumb,
  },
  data() {
    return {
      breadcrumbItems: breadcrumbData.gallery, // Breadcrumb pre Galériu
      slides: galleryData.slides, // Dáta pre Carousel
      posts: galleryData.posts, // Dáta pre príspevky
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
</style>


