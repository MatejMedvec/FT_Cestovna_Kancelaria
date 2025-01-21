<template>
  <v-container>
    <!-- Formulár na pridanie príspevku -->
    <PostForm @post-added="refreshPosts" />

    <!-- Zoznam príspevkov -->
    <v-row>
      <v-col cols="12" md="6" v-for="post in posts" :key="post.id">
        <BlogPost
          :post="post"
          @edit="navigateToEdit"
          @delete="deletePost"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { usePostsStore } from "@/stores/usePostsStore";
import PostForm from "@/components/PostForm.vue";
import BlogPost from "@/components/BlogPost.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "BlogView",
  components: {
    PostForm,
    BlogPost,
  },
  setup() {
    const router = useRouter();
    const postsStore = usePostsStore();

    const posts = computed(() => postsStore.posts); // Reaktívny prístup k príspevkom

    const refreshPosts = () => {
      console.log("Príspevky aktualizované"); // Debugging
    };

    const navigateToEdit = (post) => {
      router.push({ name: "editPost", params: { id: post.id } });
    };

    const deletePost = (postId) => {
      postsStore.deletePost(postId);
    };

    return {
      posts,
      navigateToEdit,
      deletePost,
      refreshPosts,
    };
  },
};
</script>









