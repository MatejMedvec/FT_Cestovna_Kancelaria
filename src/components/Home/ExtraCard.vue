<template>
  <v-col cols="12" sm="6" md="4" class="mb-4">
    <v-card
      class="extra-card"
      elevation="2"
      hover
    >
      <v-img
        :src="image"
        :alt="title"
        class="extra-card-image"
        height="200"
        cover
      ></v-img>
      <v-card-title class="text-uppercase fw-bold text-center">
        {{ title }}
      </v-card-title>
      <v-card-text class="text-center">
        {{ description }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ExtraCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.extra-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.extra-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.extra-card-image {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}

.text-uppercase {
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.text-center {
  text-align: center; 
}
</style>


