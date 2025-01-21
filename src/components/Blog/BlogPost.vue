<template>
  <v-card class="mb-4 blog-post-card" elevation="3" hover>
    <v-img :src="post.image_url" height="300" class="blog-post-image" cover></v-img>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>Publikované dňa {{ post.createdAt }}</v-card-subtitle>
    <v-card-text>{{ post.content }}</v-card-text>
    <v-card-actions v-if="canEdit">
      <v-btn color="primary" @click="$emit('edit', post)">Editovať</v-btn>
      <v-btn color="error" @click="$emit('delete', post.id)">Vymazať</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
    canEdit: {
      type: Boolean,
      default: false, // Povolenie úprav len pre sekciu "Moje príspevky"
    },
  },
};
</script>

<style scoped>
.blog-post-card {
  border-radius: 16px; /* Zaoblenie karty */
  overflow: hidden; /* Skrytie presahujúcich častí */
  transition: transform 0.3s, box-shadow 0.3s; /* Animácia pri hover */
}

.blog-post-card:hover {
  transform: translateY(-5px); /* Jemné zdvihnutie pri hover */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Tieň pri hover */
}

.blog-post-image {
  border-radius: 16px 16px 0 0; /* Zaoblenie len na vrchu */
  object-fit: cover; /* Prispôsobenie obrázka */
}
</style>










