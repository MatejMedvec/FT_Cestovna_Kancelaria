<template>
  <v-container>
    <Breadcrumb :currentView="'contact'" />
    <v-row class="text-center my-5">
      <v-col>
        <h1 class="text-uppercase fw-bold">Kontaktujte nás</h1>
        <p>Máte otázky? Radi vám odpovieme!</p>
      </v-col>
    </v-row>
    <ContactInfo />
    <ContactForm />
    <SocialLinks />
  </v-container>
</template>

<script>
import Breadcrumb from "@/components/Shared/Breadcrumb.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";
import ContactInfo from "@/components/Contact/ContactInfo.vue";
import SocialLinks from "@/components/Contact/SocialLinks.vue";

export default {
  name: "ContactView",
  components: {
    Breadcrumb,
    ContactForm,
    ContactInfo,
    SocialLinks,
  },
};
</script>


<style scoped>
.text-uppercase {
  text-transform: uppercase;
  font-weight: bold;
}

.my-5 {
  margin: 3rem 0;
}

.text-center {
  text-align: center;
}

.v-btn {
  transition: transform 0.2s ease;
}

.v-btn:hover {
  transform: scale(1.1);
}
</style>
