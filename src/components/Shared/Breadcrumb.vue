<template>
  <v-container class="breadcrumb-container py-5 my-4">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" class="d-flex align-center">
        <v-breadcrumbs>
          <v-breadcrumbs-item
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            :href="breadcrumb.href"
            :disabled="breadcrumb.disabled"
            class="breadcrumb-item"
          >
            <span
              :class="{
                'active-link': !breadcrumb.disabled,
                'inactive-link': breadcrumb.disabled,
              }"
            >
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
  background-color: #f8f9fa; /* Svetlé pozadie */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Jemný tieň */
  margin-top: 80px; /* Väčšia vzdialenosť od navbaru */
}

.breadcrumb-item {
  font-size: 16px;
  font-weight: 500;
}

.active-link {
  color: #007bff; /* Modrá farba pre aktívne odkazy */
  text-decoration: none;
}

.inactive-link {
  color: #6c757d; /* Svetlo šedá farba pre neaktívne */
  text-decoration: none;
}

.active-link:hover {
  text-decoration: underline;
}
</style>







