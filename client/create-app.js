import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Meta from 'vue-meta';

import App from './app.vue';
import createRouter from './config/router';
import createStore from './store/store';
import './assets/styles/global.styl';

import Notification from './components/notification';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Meta);
Vue.use(Notification);

export default () => {
  const store = createStore();
  const router = createRouter();
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });
  return { app, router, store };
};
