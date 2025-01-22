<template>
  <v-container>
    <v-row class="section-spacing">
      <Breadcrumb :currentView="'blog'" />
    </v-row>

    <v-row>
      <PostForm @post-added="refreshPosts" />
    </v-row>

    <v-row class="mt-5">
      <v-col cols="12">
        <h2 class="text-uppercase fw-bold">Moje príspevky</h2>
      </v-col>
      <v-col cols="12" md="6" v-for="post in userPosts" :key="post.id" class="section-spacing">
        <BlogPost :post="post" canEdit @edit="navigateToEdit" @delete="deletePost" />
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="12">
        <h2 class="text-uppercase fw-bold">Ostatné príspevky</h2>
      </v-col>
      <v-col cols="12" md="6" v-for="post in otherPosts" :key="post.id" class="section-spacing">
        <BlogPost :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { usePostsStore } from "@/stores/usePostsStore";
import PostForm from "@/components/Blog/PostForm.vue";
import BlogPost from "@/components/Blog/BlogPost.vue";
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import mockPosts from "@/assets/otherPosts.json";

export default {
  name: "BlogView",
  components: {
    PostForm,
    BlogPost,
    Breadcrumb,
  },
  setup() {
    const postsStore = usePostsStore();
    const router = useRouter();

    const userPosts = computed(() => postsStore.posts);
    const otherPosts = computed(() => mockPosts);

    const refreshPosts = () => {
      console.log("Príspevky aktualizované");
    };

    const navigateToEdit = (post) => {
      router.push({ name: "editPost", params: { id: post.id } });
    };

    const deletePost = (postId) => {
      postsStore.deletePost(postId);
    };

    return {
      userPosts,
      otherPosts,
      navigateToEdit,
      deletePost,
      refreshPosts,
    };
  },
};
</script>

<style scoped>
.section-spacing {
  margin-bottom: 2rem;
}

.text-uppercase {
  font-weight: bold;
  text-transform: uppercase;
}
</style>



