import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },

  base: "/proy-html-conestilos/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        blog: resolve(__dirname, "blog.html"),
        contacto: resolve(__dirname, "contacto.html"),
        login: resolve(__dirname, "login.html"),
        blockchain: resolve(__dirname, "m-blockchain.html"),
        ciberseguridad: resolve(__dirname, "m-ciberseguridad.html"),
        fullstack: resolve(__dirname, "m-fullstack.html"),
        intelartifi: resolve(__dirname, "m-intelartifi.html"),
        registro: resolve(__dirname, "registro.html"),
      },
    },
  },
});
