<template>
  <v-container>
    <v-form v-if="post" @submit.prevent="submitEdit">
      <v-text-field v-model="post.title" label="Názov príspevku" required />
      <v-textarea v-model="post.content" label="Obsah príspevku" required />
      <v-text-field v-model="post.image_url" label="URL obrázka" required />
      <v-btn type="submit" color="primary">Uložiť zmeny</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { usePostsStore } from "@/stores/usePostsStore";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EditPost",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const postsStore = usePostsStore();

    const post = ref(null);

    onMounted(() => {
      const postId = Number(route.params.id);
      post.value = { ...postsStore.getPostById(postId) };
    });

    const submitEdit = () => {
      postsStore.editPost(post.value);
      router.push({ name: "blog" });
    };

    return {
      post,
      submitEdit,
    };
  },
};
</script>









