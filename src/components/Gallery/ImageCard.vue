<template>
  <v-card class="image-card" elevation="3" hover>
    <!-- Obrázok -->
    <v-img :src="image.image" alt="Obrázok" class="image-card-image" height="200" cover></v-img>

    <!-- Akcie (stiahnuť, obľúbené) -->
    <v-card-actions class="justify-space-between">
      <!-- Stiahnuť -->
      <v-btn icon color="primary" :href="image.image" download>
        <v-icon>mdi-download</v-icon>
      </v-btn>

      <!-- Obľúbené -->
      <v-btn
        icon
        :color="image.favorite ? 'red' : 'grey'"
        @click="$emit('toggle-favorite', image)"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.image-card-image {
  object-fit: cover;
}

.v-card-actions {
  justify-content: space-between;
}
</style>
