<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>

    <transition name="fade">
      <router-view />
    </transition>

    <button @click="notify">Push notification</button>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
import Header from './layout/header.vue';
// import Todo from './views/todo/todo.vue';
import Footer from './layout/footer.jsx';

export default {
  metaInfo: {
    title: 'Just a todo app',
  },
  components: {
    Header,
    Footer,
    // Todo
  },
  mounted () {

  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullname']),
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close',
      });
    },
  }
};
</script>

<style lang="stylus" scoped>
#app {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color #555
  opacity 0.5
  z-index -1
}
</style>
