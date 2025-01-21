<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field label="Vaše meno" v-model="form.name" outlined></v-text-field>
    <v-text-field label="Váš e-mail" v-model="form.email" outlined required></v-text-field>
    <v-textarea label="Vaša správa" v-model="form.message" outlined required></v-textarea>
    <v-btn type="submit" color="primary" block>Odoslať správu</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.form.email || !this.form.message) {
        alert("Prosím, vyplňte všetky povinné polia.");
        return;
      }
      alert(`Ďakujeme za vašu správu, ${this.form.name || "návštevník"}!`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>
