<template>
  <v-row class="text-center py-5">
    <v-col>
      <v-breadcrumbs>
        <v-breadcrumbs-item
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :href="breadcrumb.href"
          :disabled="breadcrumb.disabled"
        >
          {{ breadcrumb.text }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </v-col>
  </v-row>
</template>

<script>
import BreadcrumbData from "@/assets/Breadcrumb.json";

export default {
  name: "Breadcrumbs",
  props: {
    currentView: {
      type: String,
      required: true,
    },
  },
  computed: {
    breadcrumbs() {
      return BreadcrumbData[this.currentView] || [];
    },
  },
};
</script>

