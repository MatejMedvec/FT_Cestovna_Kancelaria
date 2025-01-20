<<<<<<< HEAD
<template>
    <v-expansion-panels>
      <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
        <v-expansion-panel-title class="fw-bold">{{ faq.question }}</v-expansion-panel-title>
        <v-expansion-panel-text>{{ faq.answer }}</v-expansion-panel-text>
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
=======
<template>
    <v-expansion-panels>
      <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
        <v-expansion-panel-title class="fw-bold">{{ faq.question }}</v-expansion-panel-title>
        <v-expansion-panel-text>{{ faq.answer }}</v-expansion-panel-text>
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
>>>>>>> c16e87dea396cb738953becbbf49f52494672f22
  