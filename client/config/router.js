import Router from 'vue-router';
import routes from './routes';

// 返回一个方法, 防止服务端渲染内存溢出
const createRouter = () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    // linkActiveClass: 'active-link', //
    // linkExactActiveClass: 'exact-active-link' // 多个时准确的path
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    // parseQuery (q) {

    // },
    // stringifyQuery (obj) {

    // },
    fallback: true
  });
};

export default createRouter;
