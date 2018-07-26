import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import './assets/styles/global.styl';
import { createRouter } from './config/router';

Vue.use(VueRouter);
const router = createRouter();

router.beforeEach((to, from, next) => {
  console.log('before each.');
  next();
});

router.beforeResolve((to, from, next) => {
  console.log('before resolve.');
  next();
});

router.afterEach((to, from) => {
  console.log('after each.');
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root');
