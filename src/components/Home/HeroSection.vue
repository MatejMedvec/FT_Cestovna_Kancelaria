<template>
  <v-container class="hero-container hero-wide">
    <v-row class="text-center justify-center">
      <v-col cols="12" md="8">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-description mt-4">{{ description }}</p>
        <div class="text-center">
          <img
            :src="image"
            :alt="altText"
            class="hero-image rounded-5 mb-4 mt-3"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
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
.hero-container {
  background-color: #f8f9fa;
  padding: 3rem 0;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 5rem; /* Odstup od navbaru */
}

.hero-container.hero-wide {
  max-width: 100%;
  padding: 3rem 2rem; /* Zvýšenie priestoru vnútri */
}

.hero-container:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-size: 2.8rem; /* Mierne väčšie písmo */
  font-weight: bold;
  color: #343a40;
}

.hero-description {
  font-size: 1.2rem;
  color: #495057;
  line-height: 1.8;
}

.hero-image {
  width: 100%;
  max-width: 1000px; /* Zvýšená maximálna šírka */
  border-radius: 15px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
</style>
