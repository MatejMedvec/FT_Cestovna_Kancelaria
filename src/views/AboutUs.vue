<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb currentView="aboutus" />

    <!-- Kto sme sekcia -->
    <v-row class="text-center justify-center my-5">
      <v-col cols="12" md="8">
        <h1 class="pt-5 text text-uppercase fw-bold">{{ aboutUs.title }}</h1>
        <p class="mb-5 mt-5">{{ aboutUs.description }}</p>
      </v-col>
    </v-row>

    <!-- Často kladené otázky -->
    <v-row class="text-center justify-center">
      <v-col cols="12" md="8">
        <h1 class="pt-5 text text-uppercase fw-bold">Často kladené otázky</h1>
        <FAQSection :faqs="faqs" />
      </v-col>
    </v-row>

    <!-- Kde nás nájdete -->
    <v-row class="text-center justify-center">
      <v-col cols="12" md="8">
        <h1 class="pt-5 text text-uppercase fw-bold">Kde nás nájdete</h1>
        <GoogleMap :src="map.src" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import FAQSection from "@/components/FAQ.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import AboutUsData from "@/assets/AboutUs.json";
import BreadcrumbData from "@/assets/Breadcrumb.json";

export default {
  name: "AboutUs",
  components: {
    Breadcrumb,
    FAQSection,
    GoogleMap,
  },
  data() {
    return {
      breadcrumbs: BreadcrumbData.breadcrumbs,
      aboutUs: AboutUsData.aboutUs,
      faqs: AboutUsData.faqs,
      map: AboutUsData.map,
    };
  },
};
</script>

<style scoped>
.text-uppercase {
  font-weight: bold;
  text-transform: uppercase;
}

.google-map iframe {
  border-radius: 10px;
}
</style>



  