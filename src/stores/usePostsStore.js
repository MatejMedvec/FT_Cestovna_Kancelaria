import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref(JSON.parse(localStorage.getItem("posts")) || []); // Reaktívne pole

  const addPost = (newPost) => {
    const newId = Date.now();
    const post = {
      ...newPost,
      id: newId,
      createdAt: new Date().toISOString().split("T")[0],
    };
    posts.value.push(post);
    saveToLocalStorage();
  };

  const editPost = (updatedPost) => {
    const index = posts.value.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      posts.value[index] = { ...updatedPost };
      saveToLocalStorage();
    }
  };

  const deletePost = (postId) => {
    posts.value = posts.value.filter((post) => post.id !== postId);
    saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts.value));
  };

  const getPostById = (id) => {
    return posts.value.find((post) => post.id === id);
  };

  return {
    posts,
    addPost,
    editPost,
    deletePost,
    saveToLocalStorage,
    getPostById,
  };
});
