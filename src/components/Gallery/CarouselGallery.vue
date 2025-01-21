<template>
  <v-carousel class="rounded-carousel" height="500">
    <v-carousel-item v-for="(slide, index) in slides" :key="index">
      <!-- Obrázok s textovými informáciami -->
      <v-img
        :src="slide.image"
        :alt="slide.title"
        class="carousel-image"
      >
        <!-- Placeholder počas načítania -->
        <template v-slot:placeholder>
          <v-row justify="center" align="center" class="fill-height">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <!-- Textový obsah (title a description) priamo na obrázku -->
      <div class="text-overlay">
        <h3 class="text-white text-center">{{ slide.title }}</h3>
        <p class="text-white text-center">{{ slide.description }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarouselGallery",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Zaoblenie carouselu */
.rounded-carousel {
  border-radius: 16px; /* Zaoblenie rohov */
  overflow: hidden; /* Obrázky rešpektujú zaoblenie */
}

/* Obrázok */
.carousel-image {
  object-fit: cover; /* Prispôsobenie obrázkov */
  height: 100%; /* Vyplní celý carousel */
}

/* Textový overlay */
.text-overlay {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5); /* Polopriehľadné pozadie */
  padding: 10px;
  color: white;
}

.text-center {
  text-align: center;
}

.text-white {
  color: white;
}
</style>
