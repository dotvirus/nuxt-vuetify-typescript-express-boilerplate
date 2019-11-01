import { Configuration } from "@nuxt/types";

const config: Configuration = {
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  /**
   * Server settings
   */
  server: {
    host: "0.0.0.0",
    port: 3000 // default: 3000
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "My Nuxt.js Typescript App",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  /*
   ** Server Middleware
   */
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/api/src/index.ts"
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};

export default config;
