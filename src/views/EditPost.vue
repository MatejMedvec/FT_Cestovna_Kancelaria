<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb :breadcrumbs="[{ text: 'Blog', href: '/' }, { text: 'Editovať', href: '', disabled: true }]" />

    <!-- Formulár na úpravu príspevku -->
    <v-row class="mb-5">
      <v-col cols="12" md="8" class="mx-auto">
        <v-form @submit.prevent="submitEdit">
          <v-text-field
            v-model="post.title"
            label="Názov príspevku"
            required
          />
          <v-textarea
            v-model="post.content"
            label="Obsah príspevku"
            required
          />
          <v-text-field
            v-model="post.image_url"
            label="URL obrázka"
            required
          />
          <v-btn type="submit" color="primary">Uložiť zmeny</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "EditPost",
  components: {
    Breadcrumb,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      post: null,
    };
  },
  created() {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = storedPosts.find((post) => post.id == this.id);
    if (foundPost) {
      this.post = { ...foundPost };
    } else {
      this.$router.push({ name: "blog" });
    }
  },
  methods: {
    submitEdit() {
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const updatedPosts = storedPosts.map((p) =>
        p.id == this.post.id ? this.post : p
      );
      localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Aktualizujeme localStorage
      this.$router.push({ name: "blog" }); // Presmerujeme späť na blog
    },
  },
};
</script>


  