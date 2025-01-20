<<<<<<< HEAD
<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb :breadcrumbs="breadcrumbData.blog" />

    <!-- Formulár na pridanie nového príspevku -->
    <v-row class="mb-5">
      <PostForm @submit="addPost" />
    </v-row>

    <!-- Zoznam príspevkov -->
    <v-row>
      <v-col cols="12" md="6" v-for="post in posts" :key="post.id">
        <Post
          :post="post"
          @edit="navigateToEdit"
          @delete="deletePost"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PostForm from "@/components/PostForm.vue";
import Post from "@/components/Post.vue";
import postsData from "@/assets/Posts.json";
import breadcrumbData from "@/assets/Breadcrumb.json";

export default {
  name: "Blog",
  components: {
    Breadcrumb,
    PostForm,
    Post,
  },
  data() {
    return {
      posts: postsData, // Načítanie zo súboru
      breadcrumbData,
    };
  },
  methods: {
    addPost(newPost) {
      const newId = Date.now();
      this.posts.push({
        ...newPost,
        id: newId,
        createdAt: new Date().toISOString().split("T")[0],
      });
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    navigateToEdit(post) {
      this.$router.push({ name: "editPost", params: { id: post.id } });
    },
    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
  },
};
</script>

=======
<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb :breadcrumbs="breadcrumbData.blog" />

    <!-- Formulár na pridanie nového príspevku -->
    <v-row class="mb-5">
      <PostForm @submit="addPost" />
    </v-row>

    <!-- Zoznam príspevkov -->
    <v-row>
      <v-col cols="12" md="6" v-for="post in posts" :key="post.id">
        <Post
          :post="post"
          @edit="navigateToEdit"
          @delete="deletePost"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PostForm from "@/components/PostForm.vue";
import Post from "@/components/Post.vue";
import postsData from "@/assets/Posts.json";
import breadcrumbData from "@/assets/Breadcrumb.json";

export default {
  name: "Blog",
  components: {
    Breadcrumb,
    PostForm,
    Post,
  },
  data() {
    return {
      posts: postsData, // Načítanie zo súboru
      breadcrumbData,
    };
  },
  methods: {
    addPost(newPost) {
      const newId = Date.now();
      this.posts.push({
        ...newPost,
        id: newId,
        createdAt: new Date().toISOString().split("T")[0],
      });
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    navigateToEdit(post) {
      this.$router.push({ name: "editPost", params: { id: post.id } });
    },
    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
  },
};
</script>

>>>>>>> c16e87dea396cb738953becbbf49f52494672f22
