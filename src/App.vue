<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  methods: {
    handleLocaleChanged(locale) {
      try {
        
        console.log('Locale changed in App:', locale);
        // Aquí puedes realizar cualquier acción adicional si es necesario
      } catch (error) {
        console.error('Error in handleLocaleChanged:', error);
      }
    }
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div>
    <Navbar @localeChanged="handleLocaleChanged" />
    <router-view />
    <Footer />
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
