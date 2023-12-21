<template>
 
    <header class="p-3 mb-0 border-bottom" style="background-color: #14253f;">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
        <a class="navbar-brand" href="https://bustedweb.me/">
          <img src="@/assets/img/bustedweb.png" width="150px" height="44.92px" alt="logo" title="logo">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" title="NoBrokenLinks" class="nav-link px-2 link-body-emphasis text-white">NoBrokenLinks</a></li>
          <li><span class="nav-link text-white">|</span></li> 
          <li><a href="/analyzer" title="Image Analyzer" class="nav-link px-2 link-body-emphasis text-white">Image Analyzer</a></li>
        </ul>

        <div class="dropdown text-end">
          <ul class="nav nav-pills">
            <li class="nav-item">
            <a href="#" class="nav-link active d-block text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-solid fa-globe"></i> Language
            </a>
            <div>
 
          </div>
            <ul class="dropdown-menu text-small shadow">
              <!--
              <li v-for="lang in languages" :key="lang.language">
                <a class="dropdown-item" :class="{ active: lang.language === i18n.locale }" @click="changeLocale(lang.language)">
                  {{ lang.title }}
                </a>
              </li>-->
              <li @click="changeLocale('en')">
                <a class="dropdown-item" :class="{ active: currentLocale === 'en' }" title="en">English</a>
              </li>
              <li @click="changeLocale('es')">
                <a class="dropdown-item" :class="{ active: currentLocale === 'es' }" title="es">Español</a>
              </li>
    
   
              <!--  
              <li><a class="dropdown-item" href="https://bustedweb.me/ja/" title="ja">日本</a></li>
              <li><a class="dropdown-item" href="https://bustedweb.me/fr/" title="fr">Français</a></li>
              <li><a class="dropdown-item" href="https://bustedweb.me/cn/" title="cn">中国</a></li>
              <li><a class="dropdown-item" href="https://bustedweb.me/de/" title="de">Deutsch</a></li>
              <li><a class="dropdown-item" href="https://bustedweb.me/kr/" title="kr">대한민국</a></li>
              <li><a class="dropdown-item" href="https://bustedweb.me/ua/" title="ua">Українська</a></li>
              -->
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>  
  </template>
  
  <script setup>
  import i18n from '../plugins/i18n';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const languages = [
    { language: 'en', title: 'English' },
    { language: 'es', title: 'Español' }
  ];

  const changeLocale = async (locale) => {
    try {
      i18n.global.locale = locale;

      // Espera a que se carguen los mensajes antes de imprimirlos
      const messages = await i18n.global.getLocaleMessage(locale);
      //this.$router.push({ path: `/${locale}` });
      if (locale !== 'en'){
        router.push({ path: `/${locale}` });
      }
      console.log('Locale changed to:', locale);
      emit('localeChanged', locale);
    } catch (error) {
      console.error('Error in changeLocale:', error);
    }
  };
  </script>
  
  <style>
  .text-white{
    font-weight: 600 !important;
  }
  .text-white:hover{
    color: #eb50c8 !important ;
  }
  </style> 