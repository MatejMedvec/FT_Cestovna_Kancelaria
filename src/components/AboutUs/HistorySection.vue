<template>
  <v-row class="my-5 py-5 text-center justify-center">
    <v-col cols="12" md="8">
      <h2 class="text-uppercase fw-bold mb-4">Naša história</h2>
      <v-timeline align="start">
        <v-timeline-item
          v-for="(item, index) in history"
          :key="index"
          :title="item.year"
          :subtitle="item.event"
          class="mb-4"
        >
          <p>{{ item.description }}</p>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HistorySection",
  props: {
    history: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
