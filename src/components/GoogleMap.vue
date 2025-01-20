<template>
    <div class="google-map">
      <iframe
        :src="src"
        width="100%"
        height="450"
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
    border-radius: 10px;
  }
  </style>
  