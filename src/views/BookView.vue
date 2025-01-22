<template>
  <v-container class="py-5">

    <Breadcrumb :currentView="'book'" />

    <v-row>
      <v-col cols="12">
        <v-img :src="destination.image" class="rounded-lg mb-5" height="400" cover></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <h1 class="text-uppercase fw-bold">{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
        <p><strong>Cena:</strong> od {{ destination.price }} €</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <h3 class="mt-5 text-uppercase fw-bold">Rezervujte si teraz</h3>
        <v-form @submit.prevent="submitReservation" ref="reservationForm">
          <v-text-field
            v-model="reservationData.name"
            label="Vaše meno"
            outlined
            required
          ></v-text-field>
          <v-text-field
            v-model="reservationData.email"
            label="Váš email"
            outlined
            required
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="reservationData.date"
            label="Dátum cesty"
            outlined
            required
            type="date"
          ></v-text-field>
          <v-btn type="submit" color="primary" block large>
            Odoslať rezerváciu
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";
import destinations from "@/assets/destinations.json";

export default {
  name: "BookView",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      destination: {},
      reservationData: {
        name: "",
        email: "",
        date: "",
      },
    };
  },
  created() {
    const slug = this.$route.params.slug;
    this.destination = destinations.find((dest) => dest.slug === slug);

    if (!this.destination) {
      this.$router.push("/");
    }
  },
  methods: {
    submitReservation() {
      if (!this.reservationData.name || !this.reservationData.email || !this.reservationData.date) {
        alert("Vyplňte všetky polia!");
        return;
      }
      alert(`Rezervácia pre ${this.destination.name} bola úspešne odoslaná!`);
      this.reservationData = { name: "", email: "", date: "" };
      this.$refs.reservationForm.reset();
    },
  },
};
</script>

<style scoped>
.text-uppercase {
  font-weight: bold;
  text-transform: uppercase;
}
.rounded-lg {
  border-radius: 16px;
}
</style>
