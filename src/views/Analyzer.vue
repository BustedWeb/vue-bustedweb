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
                        <input id="siteAuditForm" name="url" type="text" placeholder="Enter your domain" required="">
                        <button type="submit" onclick="checkImages('en')" class="ocolor">
                            <span>Analyze your images</span>
                            <span></span>
                        </button>
                      </div>
                </div>
            </div>
            <div class="page-desc s0" id="message">
              <span class="mlink">Please introduce you URL</span>
            </div>
        </div>
    </section>
    <section class="main-screen ">
      <div class="wrapper">
        <div class="p-4 code-to-copy page-desc s1" id="loader">
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
        <div class="card shadow-none border border-300 my-4 s2" data-component-card="data-component-card" id="resul">
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
                <a class="btn btn-phoenix-secondary mt-2 collapsed mlink" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" id="quantity"></a>
              </p>
              <div class="collapse" id="collapseExample">
                <div id="resultados"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</main>
  </template>
  
  <script setup>
  // Lógica de tu componente Home aquí
  import Message from '../components/Message.vue';
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