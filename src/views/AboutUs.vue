<template>
  <v-container>
    <!-- Breadcrumbs -->
    <Breadcrumb currentView="aboutus" />

    <!-- Kto sme sekcia -->
    <v-row class="text-center justify-center my-5">
      <v-col cols="12" md="8">
        <h1 class="pt-5 text-uppercase fw-bold">{{ aboutUs.title }}</h1>
        <p class="mb-5 mt-5">{{ aboutUs.description }}</p>
      </v-col>
    </v-row>

    <!-- Často kladené otázky -->
    <v-row class="text-center justify-center">
      <v-col cols="12" md="8">
        <h2 class="pt-5 text-uppercase fw-bold">Často kladené otázky</h2>
        <FAQSection :faqs="faqs" />
      </v-col>
    </v-row>

    <!-- História sekcia -->
    <HistorySection :history="history" />

    <!-- Hodnotenia od klientov -->
    <ReviewSection :reviews="reviews" />

    <!-- Kde nás nájdete -->
    <v-row class="text-center justify-center">
      <v-col cols="12" md="8">
        <h2 class="pt-5 text-uppercase fw-bold">Kde nás nájdete</h2>
        <GoogleMap :src="map.src" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";
import FAQSection from "@/components/AboutUs/FAQ.vue";
import GoogleMap from "@/components/AboutUs/GoogleMap.vue";
import HistorySection from "@/components/AboutUs/HistorySection.vue";
import ReviewSection from "@/components/AboutUs/ReviewSection.vue";
import AboutUsData from "@/assets/AboutUs.json";

export default {
  name: "AboutUs",
  components: {
    Breadcrumb,
    FAQSection,
    GoogleMap,
    HistorySection,
    ReviewSection,
  },
  data() {
    return {
      aboutUs: AboutUsData.aboutUs,
      faqs: AboutUsData.faqs,
      map: AboutUsData.map,
      history: AboutUsData.history,
      reviews: AboutUsData.reviews,
    };
  },
};
</script>

<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>

