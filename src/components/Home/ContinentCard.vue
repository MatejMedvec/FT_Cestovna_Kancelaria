<template>
  <v-col cols="12" md="4" class="text-center py-3">
    <v-card class="rounded-5 shadow-hover" :class="borderClass">
      <v-card-title :class="textClass">{{ name }}</v-card-title>
      <v-card-text>
        <i :class="'icon ' + icon + ' fa-2x ' + textClass"></i>
        <p>{{ description }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ContinentCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    textClass() {
      return this.color; // Použije farbu textu z prop
    },
    borderClass() {
      return `border-${this.color.replace("text-", "")}`; // Odstráni "text-" a použije ako triedu okraja
    },
  },
};
</script>

<style scoped>
.rounded-5 {
  border-radius: 15px;
}
.shadow-hover {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.shadow-hover:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px); /* Jemný zdvih na hover */
}
.border-primary {
  border: 3px solid #007bff; /* Modrá */
}
.border-success {
  border: 3px solid #28a745; /* Zelená */
}
.border-danger {
  border: 3px solid #dc3545; /* Červená */
}
.border-warning {
  border: 3px solid #ffc107; /* Žltá */
}
.border-info {
  border: 3px solid #17a2b8; /* Svetlomodrá */
}
</style>


