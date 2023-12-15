import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en: {
      welcomeMsg: 'A broken link on your website can negatively affect user experience and SEO.',
      smallMsg: `Regularly checking and fixing broken links is important for maintaining a positive user experience and preserving your site's search engine ranking.`,
      searchInput1:`Enter your domain`,
      searchInput2:`Look for Broken Links`,
      introduceURL:'Please introduce you URL.',
      footerMsg1:`BustedWeb was born after creating the tool 'NoBrokenLinks.' As the name suggests, its purpose was to find broken links on the web. Now, the goal is to build tools that help developers enhance the SEO experience.`,
      footerMsg2:`Welcome to BustedWeb—empowering developers, one tool at a time.`
    },
    es: {
      welcomeMsg: 'Un broken link en su sitio web puede afectar negativamente la experiencia del usuario y el SEO.',
      smallMsg: `Es importante revisar y reparar regularmente los broken links para mantener una experiencia de usuario positiva y preservar la clasificación de su sitio en los motores de búsqueda.`,
      searchInput1:`Analiza tu sitio`,
      searchInput2:`Buscar Broken Links`,
      introduceURL:'Introduce tu URL',
      footerMsg:`BustedWeb nació tras crear la herramienta 'NoBrokenLinks'. Como el nombre lo indica, la finalidad era encontrar enlaces rotos en la web. Ahora, el objetivo es crear herramientas que ayuden a los desarrolladores a mejorar la experiencia de la web y SEO.`,
      footerMsg2:`Welcome to BustedWeb—empowering developers, one tool at a time.`
    }
  }
});

console.log(i18n.messages);

export default i18n;