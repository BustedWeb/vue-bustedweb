<template>
    <div v-if="loading" class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
      data() {
      return {
        loading: false,
        progress: 0
      };
    },
    methods: {
      startLoading() {
        this.loading = true;
        let interval = setInterval(() => {
          this.progress += 10;
          if (this.progress >= 100) {
            clearInterval(interval);
            this.loading = false;
            this.progress = 0;
          }
        }, 500);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Logo */
  .progress {
    height: 20px;
    margin: 20px 0;
  }

  .progress-bar {
  /*  background-color: #4caf50;*/ /* Color de la barra de carga */
  }
  </style>