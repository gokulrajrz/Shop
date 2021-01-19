// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css';
import DefaultLayout from '~/layouts/Default.vue'
require('typeface-open-sans')

export default function (Vue, {
  appOptions,
  head
}) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    theme: {
      themes: {
        light: {
          primary: "#14C6FF",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          lightblue: "#14c6FF",
          yellow: "#FFCF00",
          pink: "#FF1976",
          orange: "#FF8657",
          magenta: "#C33AFC",
          darkblue: "#1E2D56",
          gray: "#909090",
          neutralgray: "#9BA6C1",
          green: "#2ED47A",
          red: "#FF5c4E",
          darkblueshade: "#308DC2",
          lightgray: "#BDBDBD",
          lightpink: "#FFCFE3",
          white: "#FFFFFF",
          btnorange: "#fa5b2f"
        }
      }
    }
  } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);



  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}