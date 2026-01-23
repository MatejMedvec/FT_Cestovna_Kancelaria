<template>
  <v-container class="breadcrumb-container py-5 my-4">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" class="d-flex align-center">
        <v-breadcrumbs>
          <v-breadcrumbs-item
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            :disabled="breadcrumb.disabled"
            class="breadcrumb-item"
          >
            <RouterLink
              v-if="breadcrumb.to && !breadcrumb.disabled"
              :to="breadcrumb.to"
              class="active-link"
            >
              {{ breadcrumb.text }}
            </RouterLink>

            <span v-else class="inactive-link">
              {{ breadcrumb.text }}
            </span>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BreadcrumbData from "@/assets/Breadcrumb.json";

export default {
  name: "BreadcrumbView",
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

<style scoped>
.breadcrumb-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 80px;
}

.breadcrumb-item {
  font-size: 16px;
  font-weight: 500;
}

.active-link {
  color: #007bff;
  text-decoration: none;
}

.inactive-link {
  color: #6c757d;
  text-decoration: none;
}

.active-link:hover {
  text-decoration: underline;
}
</style>
