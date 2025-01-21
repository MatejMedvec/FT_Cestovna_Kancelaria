<template>
  <v-container class="d-flex justify-center">
    <v-form @submit.prevent="submitForm" class="form-container">
      <!-- Skupina polí bez medzier -->
      <v-input-group dense>
        <v-text-field
          v-model="newPost.title"
          label="Názov príspevku"
          outlined
          hide-details
          required
        />
        <v-textarea
          v-model="newPost.content"
          label="Obsah príspevku"
          outlined
          hide-details
          rows="5"
          required
        />
        <v-text-field
          v-model="newPost.image_url"
          label="URL obrázka"
          outlined
          hide-details
          required
        />
      </v-input-group>
      <!-- Tlačidlo na odoslanie -->
      <v-btn type="submit" color="primary" block>Pridať príspevok</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { usePostsStore } from "@/stores/usePostsStore";
import { ref } from "vue";

export default {
  name: "PostForm",
  setup(_, { emit }) {
    const postsStore = usePostsStore();
    const newPost = ref({
      title: "",
      content: "",
      image_url: "",
    });

    const submitForm = () => {
      postsStore.addPost(newPost.value);
      newPost.value = { title: "", content: "", image_url: "" }; // Reset formulára
      emit("post-added"); // Informuj rodiča o pridaní
    };

    return {
      newPost,
      submitForm,
    };
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px; /* Maximálna šírka formulára */
  width: 100%; /* Zaberá plnú šírku */
  margin: 0 auto; /* Centrovanie formulára */
}

/* Odstránenie medzier medzi polí */
.v-input-group > * {
  margin-bottom: 0 !important; /* Zrušenie margin-bottom */
}
</style>


