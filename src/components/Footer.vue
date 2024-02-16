<template>
<footer class="bd-footer py-4 py-md-5 bg-body-tertiary">
    <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
      <div class="row">
        <div class="col-lg-3 mb-3">
          <img src="@/assets/img/bustedweb.jpg" alt="bustedweb" title="bustedweb" width="150px" height="44.92px">
          <ul class="list-unstyled small">
            <li class="mb-2">
              {{ $t('footerMsg1') }}
            </li>
            <li class="mb-2">{{ $t('footerMsg2') }}</li>
          </ul>
          <p>© 2023 Busted web · <a href="/privacy">{{ $t('Privacy') }}</a> </p>
        </div>
        <div class="col-6 col-lg-2 offset-lg-1 mb-3">
          <h5>{{ $t('tools') }}</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/">NoBrokenLinks</a></li>
            <li class="mb-2"><a href="/analyzer">Image Analyzer</a></li>
  
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
  
        </div>
        <div class="col-6 col-lg-2 mb-3">
  
        </div>
        <div class="col-6 col-lg-2 mb-3">
  
        </div>
      </div>
      <p>Coded and maintained by <a href="https://www.linkedin.com/in/obedvega/" class="mlink" target="_blank">Obed Vega</a> </p>
    </div>
  </footer>
</template>
<script setup>
// Lógica de tu componente Home aquí
</script>

<style>
/* Estilos de tu componente Home aquí */
</style>