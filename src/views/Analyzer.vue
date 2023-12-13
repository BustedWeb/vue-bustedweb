<template>
<main class="landing-sc-page">
  <Message />
    <section class="main-screen">
        <div class="wrapper">
            <div class="content-part__wrapper">
                <h1 class="page-title">Images without proper attributes can have negative SEO effects on your website.</h1>
                <h3 class="page-desc">
                  Elevate your website's accessibility and SEO performance by using the Web Page Image Analyzer. Simply input the web page URL, and let our tool provide you with valuable insights to enhance your online presence.
                </h3>
                <div class="audit__testCase">
                    <div id="audit__form" class="article__seo-search audit__form free-trial-form" action="">
                        <span class="error"></span>
                        <label for="siteAuditForm" class="sr-only">Domain entry form for site analysis.</label>
                        <input id="siteAuditForm" ref="inputField" name="url" type="text" placeholder="Enter your domain" required="">
                        <button type="submit" @click="handleClick" class="ocolor">
                            <span>Analyze your images</span>
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
    <section class="main-screen" v-if="responseData !== null">
      <div class="wrapper">
        <!--
        <div class="p-4 code-to-copy page-desc" id="loader">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        -->
        <div class="card shadow-none border border-300 my-4" data-component-card="data-component-card" id="resul">
          <div class="card-header p-4 border-bottom border-300 bg-soft">
            <div class="row g-3 justify-content-between align-items-center">
              <div class="col-12 col-md">
                <h4 class="text-900 mb-0" data-anchor="data-anchor" id="basic-example">Search Results<a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#basic-example" style="padding-left: 0.375em;"></a></h4>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="p-4 code-to-copy">
              <p>
                <a class="btn btn-phoenix-secondary mt-2 mlink" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample" id="quantity">We found {{responseData.length}} images, click here to see the results</a>
              </p>
              <div class="collapse" v-for="(item, index) in responseData" :key="index" id="collapseExample">
                <div id="resultados">
                  <div class="border p-3 rounded">
                    <a class="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4" href="#!">
                    <div class="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
                      <h5 class="mb-1">Image Link</h5>
                    </div>
                    <p class="mb-1"> {{item.src}}</p>
                  </a>
                  <a class="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4" href="#!">
                    <div class="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
                      <h5 class="mb-1">Alt Property</h5>
                    </div>
                    <p class="mb-1">{{item.alt}}</p>
                  </a>
                  <a class="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4" href="#!">
                    <div class="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
                      <h5 class="mb-1">Image Title</h5>
                    </div>
                    <p class="mb-1">{{item.title}}</p>
                  </a>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</main>
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
          let api = `https://api.bustedweb.me/img/${url}/`
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
  .dropdown-menu[data-bs-popper] {
        left: -100px;
      }
  .landing-sc-page .cta-section .audit__testCase .article__seo-search button[type=submit], .landing-sc-page .main-screen .audit__testCase .article__seo-search button[type=submit]{
        background-color: #eb6050!important;
      }
  .landing-sc-page .cta-section .audit__testCase .article__seo-search, .landing-sc-page .main-screen .audit__testCase .article__seo-search {
        border: 2px solid #eb6050!important;
      }
  </style>