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
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";

export default {
  name: "EditPost",
  components: {
    Breadcrumb,
  },
  setup() {
    const route = useRoute(); // Získajte ID z routy
    const router = useRouter();
    const postsStore = usePostsStore();

    const post = ref(null);

    onMounted(() => {
      const postId = Number(route.params.id); // Načítajte ID z parametrov
      const foundPost = postsStore.getPostById(postId);
      if (foundPost) {
        post.value = { ...foundPost };
      } else {
        console.error("Príspevok s daným ID nebol nájdený:", postId);
      }
    });

    const submitEdit = () => {
      if (post.value) {
        postsStore.editPost(post.value); // Upravte príspevok v store
        router.push({ name: "blog" }); // Presmerovanie na Blog stránku
      } else {
        console.error("Nie je možné uložiť zmeny, príspevok chýba.");
      }
    };

    return {
      post,
      submitEdit,
    };
  },
};
</script>

