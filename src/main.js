import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import Vue3EasyDataTable from "vue3-easy-data-table";
import PrimeVue from "primevue/config";

import "vue3-easy-data-table/dist/style.css";
import "./styles/app.scss";
import "tabulator-tables/dist/css/tabulator_semanticui.min.css";
import "tabulator-tables/dist/css/tabulator_materialize.min.css";

// import VueGoodTablePlugin from "vue-good-table";

// import the styles
// import "vue-good-table/dist/vue-good-table.css";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
// import "quasar/src/css/index.sass";
// import "https://fonts.cdnfonts.com/css/work-sans";

const app = createApp(App);
// app.use(VueGoodTablePlugin);

app.use(router);
app.use(PrimeVue);
// app.use(Vue3EasyDataTable);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.mount("#app");
