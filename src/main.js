import Vue from 'vue'
import App from './App.vue'

import { router } from './router.js';
import store from './store'; //index.js - importovali smo store a nismo precizirali koji store jer imamo taj index.js i cim imamo to onda ne moramo precizirati store

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
