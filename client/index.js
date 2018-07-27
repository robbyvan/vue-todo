import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './app.vue';
import createRouter from './config/router';
import createStore from './store/store';

import './assets/styles/global.styl';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

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
  store,
  render: (h) => h(App)
}).$mount('#root');
