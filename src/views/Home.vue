<!-- Home.vue -->
<template>
    <div>
      
      <main class="landing-sc-page">
        <Message />  
        <section class="main-screen">
            <div class="wrapper">
                <div class="content-part__wrapper">
                    <h1 class="page-title">A broken link on your website can negatively affect user experience and SEO.</h1>
                    <h3 class="page-desc">Regularly checking and fixing broken links is important for maintaining a positive user experience and preserving your site's search engine ranking.</h3>
                    <div class="audit__testCase">
                        <div id="audit__form" class="article__seo-search audit__form free-trial-form" action="">
                            <span class="error"></span>
                            <label for="siteAuditForm" class="sr-only">Domain entry form for site analysis.</label>
                            <input type="text" ref="inputField" name="url"  placeholder="Enter your domain" required="">
                            <button type="submit" @click="handleClick" class="custom">
                                <span>Look for Broken Links</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="page-desc">
                  <span class="mlink">{{ messageEmptyURL }}</span>
                </div>

                <div class="img-wrap">
                  <loading-bar ref="loadingBar" @loading-finished="showSecondLoader"></loading-bar>
                </div>
            </div>
            <div class="wrapper" v-if="loadingInfo">
              <div class="page-desc">
                <span class="mlink">{{message1}}</span>
                <span class="mlink">{{message2}}</span>
              </div>
              <div id="loader" class="loader"></div>
            </div>
        </section>

        <section class="results"  v-if="responseData !== null">
            <div class="wrapper">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        Broken Links
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1">
                        Total Links
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false" tabindex="-1">
                        Link Types
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false" tabindex="-1">
                        Issue Types
                      </button>
                    </li>
                  </ul>
                  
                  <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ul class="list-group" id="resultados">
                      <li v-for="(item, index) in responseData" :key="index" class="list-group-item">
                        <span class="reddot"></span>
                        <span class="textrs">
                          <a :href="item.ruta" target="_blank">{{ item.ruta }}</a>
                        </span>
                        <span class="mlink"> &nbsp; &nbsp; {{ item.status }}</span>
                        <span class="flex-spacer"></span>
                        <!--
                        <button type="button" class="btn btn-outline-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                          </svg>
                          <span class="textbutton">View issue</span>
                        </button>
                        -->
                      </li>
                    </ul>
                    </div>
                    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="alert alert-warning" role="alert">
                            This results are not available for you at the moments!
                        </div>
                    </div>
                    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                        <div class="alert alert-warning" role="alert">
                            This results are not available for you at the moments!
                        </div>
                    </div>
                    <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <div class="alert alert-warning" role="alert">
                            This results are not available for you at the moments!
                        </div>
                    </div>
                  </div>
            </div>
        </section>
    </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Message from '../components/Message.vue';
  import LoadingBar from '@/components/LoadingBar.vue';

  export default {
    data() {
      return {
        loadingInfo: false,
        shout: '',
        messageEmptyURL:'',
        message1:'',
        message2:'',
        responseData: null
      };
    },
    methods: {
      showSecondLoader() {
        this.loadingInfo = true;
        console.log("YES!!")
      },
      async handleClick() {
        //const url = this.$refs.inputField.value;
        //console.log('url: '+url);
        try {
          const url = this.$refs.inputField.value;
        
          if (!url.trim()) {
            // Actualizar la propiedad errorMessage si el campo está vacío
            this.messageEmptyURL = 'Please introduce you URL.';
            console.log(this.messageEmptyURL);
            return;
          }
          this.messageEmptyURL = '';
          await this.$refs.loadingBar.startLoading();
          this.showSecondLoader();
          
          this.message1 = 'We are reviewing all the links found in the URL.';
          this.message2 = 'This might take a few seconds.';
          console.log('Searching!!');
          let api = `https://api.bustedweb.me/check/${url}/`
          console.log(api);
          //this.loadingInfo =  true;
          const response = await axios.get(api);

          console.log('Respuesta:', response.data);
          this.responseData = response.data;
        } catch (error) {
          // Manejar errores en la petición
          console.error('Error al hacer la petición:', error);
        } finally{
          this.loadingInfo =  false;
          this.message1 = '';
          this.message2 = '';
        }
      }
    },
    components: {
      Message,
      LoadingBar,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos de tu componente Home aquí */
  .custom:hover {
    font-weight: 700;
  }
  </style>