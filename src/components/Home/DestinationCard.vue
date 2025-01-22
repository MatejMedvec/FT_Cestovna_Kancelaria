<template>
  <v-col cols="12" sm="6" md="4" class="mb-4">
    <v-card class="destination-card" elevation="2" hover>
      <v-img :src="image" :alt="name" class="destination-image" height="200" cover></v-img>
      <v-card-title class="text-uppercase fw-bold text-center">{{ name }}</v-card-title>
      <v-card-text class="text-center">
        <div class="d-flex justify-space-between align-items-center">
          <RouterLink :to="`/book/${slug}`" class="btn btn-primary rounded-pill">
            Rezervovať
          </RouterLink>
          <p class="mb-0">od <strong>{{ price }} €</strong></p>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "DestinationCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    slug: {
      type: String, 
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.destination-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
.destination-image {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}
.text-uppercase {
  letter-spacing: 1px;
}
.btn {
  font-weight: bold;
}
</style>



