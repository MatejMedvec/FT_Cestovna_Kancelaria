<template>
  <div class="google-map">
    <iframe
      :src="src"
      width="100%"
      height="450"
      class="shadow-sm rounded-4"
      style="border: 0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.google-map iframe {
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>

