<template>
  <v-row class="section-spacing">
    <Breadcrumb :currentView="'editpost'" />
  </v-row>
  <v-container>
    <v-form v-if="post" @submit.prevent="submitEdit">
      <v-text-field v-model="post.title" label="Názov príspevku" required />
      <v-textarea v-model="post.content" label="Obsah príspevku" required />
      <v-text-field v-model="post.image_url" label="URL obrázka" required />
      <v-btn type="submit" color="primary">Uložiť zmeny</v-btn>
    </v-form>
    <v-alert type="error" color="red" v-else>
      Príspevok sa nepodarilo načítať. Skontrolujte ID v URL.
    </v-alert>
  </v-container>
</template>

<script>
import { usePostsStore } from "@/stores/usePostsStore";
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";

export default {
  name: "EditPost",
  components: {
    Breadcrumb,
  },

  data() {
    return {
      postsStore: null,
      post: null,
    };
  },

  created() {
    this.postsStore = usePostsStore();

    const idRaw = this.$route.params.id;
    const postId = typeof idRaw === "string" ? Number(idRaw) : idRaw;

    const foundPost = this.postsStore.getPostById(postId);

    if (foundPost) {
      this.post = { ...foundPost };
    } else {
      console.error("Príspevok s daným ID nebol nájdený:", postId);
    }
  },

  methods: {
    submitEdit() {
      if (!this.post) {
        console.error("Nie je možné uložiť zmeny, príspevok chýba.");
        return;
      }

      if (!this.post.title || !this.post.content || !this.post.image_url) {
        alert("Vyplňte všetky polia!");
        return;
      }

      this.postsStore.editPost(this.post);
      this.$router.push({ name: "blog" });
    },
  },
};
</script>
