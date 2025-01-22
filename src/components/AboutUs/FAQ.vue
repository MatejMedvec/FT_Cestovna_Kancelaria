<template>
  <v-expansion-panels class="faq-section shadow-sm rounded-4">
    <v-expansion-panel v-for="(faq, index) in faqs" :key="index" class="faq-panel my-2">
      <v-expansion-panel-title class="fw-bold text-primary">
        {{ faq.question }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ faq.answer }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "FAQSection",
  props: {
    faqs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.faq-section {
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 20px;
}

.faq-panel {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
}
</style>
