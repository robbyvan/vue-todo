import Vue from 'vue'

new Vue({
  el: '#root',
  // template:`
  //   <div v-bind:id="aaa" v-on:click="onClick()">
  //     {{ text }}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template:`
    <div :class="{ active: isActive }">
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    text: 'asd',
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main'
  },
  methods: {
    onClick() {
      console.log('clicked.');
    }
  }
});
