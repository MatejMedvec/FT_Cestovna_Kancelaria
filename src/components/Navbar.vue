<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <!-- Logo -->
        <RouterLink to="/" class="navbar-brand">
          <img src="/img/Logo.png" alt="logo" width="50" height="50" class="d-inline-block align-text-top" />
        </RouterLink>
  
        <!-- Toggler button pre mobilné zariadenia -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navigačné odkazy -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-3">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text fw-bold" active-class="active">Domov</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/aboutus" class="nav-link text fw-bold" active-class="active">O nás</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/gallery" class="nav-link text fw-bold" active-class="active">Galéria</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/blog" class="nav-link text fw-bold" active-class="active">Blog</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link text fw-bold" active-class="active">Kontakt</RouterLink>
            </li>
          </ul>
  
          <!-- Prihlásenie/Odhlásenie -->
          <ul class="navbar-nav">
            <li class="nav-item" v-if="isLoggedIn">
              <button @click="logout" class="btn btn-primary">Odhlásiť sa</button>
            </li>
            <li class="nav-item" v-else>
              <RouterLink to="/login" class="btn btn-primary">Prihlásiť sa</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isLoggedIn: false, // Na základe stavu môžeš implementovať logiku prihlásenia
      };
    },
    methods: {
      logout() {
        this.isLoggedIn = false; // Pridaj vlastnú logiku na odhlásenie
        alert('Boli ste odhlásený.');
      },
    },
  };
  </script>
  
  <style scoped>
  .nav-link.active {
    font-weight: bold;
    color: #007bff; /* Zmena farby aktívneho odkazu */
  }
  .navbar-brand img {
    border-radius: 50%; /* Príklad úpravy štýlu loga */
  }
  </style>
  