import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: JSON.parse(localStorage.getItem("posts")) || [],
  }),

  actions: {
    saveToLocalStorage() {
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },

    addPost(newPost) {
      const newId = Date.now();
      const post = {
        ...newPost,
        id: newId,
        createdAt: new Date().toISOString().split("T")[0],
      };

      this.posts.push(post);
      this.saveToLocalStorage();
    },

    editPost(updatedPost) {
      const index = this.posts.findIndex((p) => p.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = { ...updatedPost };
        this.saveToLocalStorage();
      }
    },

    deletePost(postId) {
      this.posts = this.posts.filter((p) => p.id !== postId);
      this.saveToLocalStorage();
    },
  },

  getters: {
    getPostById: (state) => (id) => state.posts.find((p) => p.id === id),
  },
});
