<template>
  <v-container class="d-flex justify-center">
    <v-form @submit.prevent="submitForm" class="form-container">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="newPost.title"
            label="Názov príspevku"
            outlined
            hide-details
            required
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="newPost.content"
            label="Obsah príspevku"
            outlined
            hide-details
            rows="5"
            required
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="newPost.image_url"
            label="URL obrázka"
            outlined
            hide-details
            required
          />
        </v-col>
      </v-row>
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
      newPost.value = { title: "", content: "", image_url: "" }; 
      emit("post-added");
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
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}
</style>



