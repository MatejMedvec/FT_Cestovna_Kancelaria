
<template>
  <v-card class="mb-4">
    <v-img :src="post.image_url" height="200" alt="Obrázok príspevku" />
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>Publikované dňa {{ post.createdAt }}</v-card-subtitle>
    <v-card-text>{{ post.content }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('edit', post)">Editovať</v-btn>
      <v-btn color="error" @click="$emit('delete', post.id)">Vymazať</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>







  