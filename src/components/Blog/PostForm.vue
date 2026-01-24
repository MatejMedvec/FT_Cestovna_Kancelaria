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

      <v-btn type="submit" color="primary" block>
        Pridať príspevok
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { usePostsStore } from "@/stores/usePostsStore";

export default {
  name: "PostForm",

  data() {
    return {
      postsStore: null,
      newPost: {
        title: "",
        content: "",
        image_url: "",
      },
    };
  },

  created() {
    this.postsStore = usePostsStore();
  },

  methods: {
    submitForm() {
      if (!this.newPost.title || !this.newPost.content || !this.newPost.image_url) {
        alert("Vyplňte všetky polia!");
        return;
      }

      this.postsStore.addPost({ ...this.newPost });

      this.newPost = { title: "", content: "", image_url: "" };

      this.$emit("post-added");
    },
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
