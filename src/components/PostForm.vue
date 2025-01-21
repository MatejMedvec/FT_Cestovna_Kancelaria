<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field v-model="newPost.title" label="Názov príspevku" required />
    <v-textarea v-model="newPost.content" label="Obsah príspevku" required />
    <v-text-field v-model="newPost.image_url" label="URL obrázka" required />
    <v-btn type="submit" color="primary">Pridať príspevok</v-btn>
  </v-form>
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












