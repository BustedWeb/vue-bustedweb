<script setup>
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <!--
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <Home />
  </main>
  -->
  <div>
    <!--
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/analyzer">Analyzer</router-link></li>
        
      </ul>
    -->
    <Navbar />
    <router-view /> <!-- Esto mostrará el componente correspondiente según la ruta actual -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
