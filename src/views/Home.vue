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

                    
                            <button type="submit" @click="handleClick">
                                <span>Look for Broken Links</span>
                            </button>
                        </div>
                    </div>
                </div>


                <div class="page-desc s0" id="message">
                  <span class="mlink">Please introduce you URL</span>
                </div>
                <div class="img-wrap">
                  <div class="loading-container s2" id="bar">
                    <div class="loading-bar s2" id="progress-bar"></div>
                  </div>
                </div>
            </div>
            <div class="wrapper">
              <div class="page-desc s3" id="m2">
                <span class="mlink">We are reviewing all the links found in the URL.</span>
                <span class="mlink">This might take a few seconds.</span>
              </div>
            </div>
        </section>

        <section class="results s1" id="results">
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
                    <div id="loader" class="loader"></div>
                    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <ul class="list-group" id="resultados"></ul>
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
  import Message from '../components/Message.vue';

  export default {
    data() {
      return {
      //  text: '',
        shout: '',
      };
    },
    methods: {
      handleClick() {
        const message = this.$refs.inputField.value;
        console.log(message);
//        this.shout = `${message.toUpperCase()}!!!`;
      },
    },
    components: {
      Message,
    },
  };
  </script>
  
  <style>
  /* Estilos de tu componente Home aquí */
  </style>