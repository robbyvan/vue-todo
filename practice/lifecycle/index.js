import Vue from 'vue';

new Vue({
  el: '#root',
  template: '<div>{{ text }}</div>',
  data: {
    text: 'abc',
  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  updated() {

  },
  activated() {

  },
  deactivated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
  render(h) {
    return h('div', {}, this.text)
  },
  renderError() {

  },
  errorCaptured() {
    // 会向上冒泡
  }
});
