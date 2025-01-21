<template>
  <v-card>
    <v-img :src="image.image" :alt="image.title" height="200"></v-img>
    <v-card-title>{{ image.title }}</v-card-title>
    <v-card-subtitle>{{ image.description }}</v-card-subtitle>
    <v-card-actions>
      <v-btn icon :href="image.image" download>
        <v-icon>mdi-download</v-icon>
      </v-btn>
      <v-btn icon @click="addToFavorites(image)">
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
  methods: {
    addToFavorites(image) {
      console.log("Pridané do obľúbených:", image.title);
    },
  },
};
</script>

