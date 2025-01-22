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
      default: false, 
    },
  },
};
</script>

<style scoped>
.blog-post-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.blog-post-image {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}
</style>










