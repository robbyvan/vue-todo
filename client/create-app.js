import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Meta from 'vue-meta';

import App from './app.vue';
import createRouter from './config/router';
import createStore from './store/store';

import Notification from './components/notification';
import Tabs from './components/tabs';

import './assets/styles/global.styl';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Meta);
Vue.use(Notification);
Vue.use(Tabs);

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
