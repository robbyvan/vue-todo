import Vue from 'vue';

const app = new Vue({
  // el: '#root',
  template: '<div>{{ text }}</div>',
  data: {
    text: 0
  }
});

app.$mount('#root');

// setInterval(() => {
//   app.text += 1;
// }, 500);

console.log(app.$options);
