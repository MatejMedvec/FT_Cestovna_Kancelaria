<template>
  <v-container class="py-5">
    <!-- Hero Section -->
      <HeroSection
        :title="heroData.title"
        :description="heroData.description"
        :image="heroData.image"
      />

    <!-- Sekcia kontinentov -->
    <v-row class="text-center justify-center my-5">
      <ContinentCard
        v-for="continent in continents"
        :key="continent.name"
        :name="continent.name"
        :icon="continent.icon"
        :color="continent.color"
        :description="continent.description"
      />
    </v-row>

    <!-- Odkaz na galériu -->
    <v-row class="text-center mt-3 mb-5">
      <v-col>
        <RouterLink to="/gallery" class="btn btn-primary rounded-5 btn-lg text-white fw-bold">GALÉRIA</RouterLink>
      </v-col>
    </v-row>

    <!-- Naj destinácie -->
    <v-row class="mt-5 text-center">
      <v-col cols="12">
        <h2 class="text-reset fw-bold text-uppercase pb-2">NAJ DESTINÁCIE</h2>
      </v-col>
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.name"
        :id="destination.id"
        :name="destination.name"
        :image="destination.image"
        :price="destination.price"
      />
    </v-row>

    <!-- Citát -->
    <v-row class="text-center my-5">
      <v-col>
        <figure>
          <blockquote class="blockquote">
            <p>"Skutočné cestovanie nie je hľadanie nových krajín, ale nových očí."</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">Marcel Proust</cite>
          </figcaption>
        </figure>
      </v-col>
    </v-row>

    <!-- Extra obsah -->
    <v-row class="my-5">
      <ExtraCard
        v-for="extra in extras"
        :key="extra.title"
        :title="extra.title"
        :description="extra.description"
        :image="extra.image"
      />
    </v-row>

    <!-- Zaujímavosti a fakty -->
    <div class="mt-5">
      <h1 class="text-uppercase text-center fw-bold mb-4">Zaujímavosti a fakty</h1>
      <FactAccordion :facts="facts" />
    </div>
  </v-container>
</template>

<script>
import HeroSection from "@/components/Home/HeroSection.vue";
import ContinentCard from "@/components/Home/ContinentCard.vue";
import DestinationCard from "@/components/Home/DestinationCard.vue";
import ExtraCard from "@/components/Home/ExtraCard.vue";
import FactAccordion from "@/components/Home/FactAccordion.vue";
import HomeViewData from "@/assets/HomeView.json";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    ContinentCard,
    DestinationCard,
    ExtraCard,
    FactAccordion,
  },
  data() {
    return {
      heroData: HomeViewData.heroSection,
      continents: HomeViewData.continents,
      destinations: HomeViewData.destinations,
      extras: HomeViewData.extras,
      facts: HomeViewData.facts,
    };
  },
};
</script>

<style scoped>
.text-uppercase {
  font-weight: bold;
  text-transform: uppercase;
}

.text-reset {
  color: inherit;
}

.hero-section-container {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
}

.shadow-hover {
  transition: box-shadow 0.3s ease-in-out;
}

.shadow-hover:hover {
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.blockquote {
  font-size: 1.25rem;
  font-style: italic;
}

.blockquote-footer {
  font-size: 1rem;
  color: #6c757d;
}
</style>
