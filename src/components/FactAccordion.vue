<template>
    <div class="accordion mb-5" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(fact, index) in facts"
        :key="index"
      >
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            :data-bs-toggle="'collapse'"
            :data-bs-target="'#collapse' + index"
            :aria-expanded="index === 0"
            :aria-controls="'collapse' + index"
          >
            {{ fact.title }}
          </button>
        </h2>
        <div
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          :id="'collapse' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">{{ fact.content }}</div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "FactAccordion",
    props: {
      facts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
