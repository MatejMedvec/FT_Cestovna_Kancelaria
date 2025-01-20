<<<<<<< HEAD
<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field v-model="newPost.title" label="Názov príspevku" required />
    <v-textarea v-model="newPost.content" label="Obsah príspevku" required />
    <v-text-field v-model="newPost.image_url" label="URL obrázka" required />
    <v-btn type="submit" color="primary">Pridať príspevok</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      newPost: {
        title: "",
        content: "",
        image_url: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", { ...this.newPost }); // Emitujeme nový príspevok
      this.resetForm(); // Resetujeme obsah formulára
    },
    resetForm() {
      this.newPost = {
        title: "",
        content: "",
        image_url: "",
      };
    },
  },
};
</script>




  
  
  
=======
<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field v-model="newPost.title" label="Názov príspevku" required />
    <v-textarea v-model="newPost.content" label="Obsah príspevku" required />
    <v-text-field v-model="newPost.image_url" label="URL obrázka" required />
    <v-btn type="submit" color="primary">Pridať príspevok</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      newPost: {
        title: "",
        content: "",
        image_url: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", { ...this.newPost }); // Emitujeme nový príspevok
      this.resetForm(); // Resetujeme obsah formulára
    },
    resetForm() {
      this.newPost = {
        title: "",
        content: "",
        image_url: "",
      };
    },
  },
};
</script>




  
  
  
>>>>>>> c16e87dea396cb738953becbbf49f52494672f22
  