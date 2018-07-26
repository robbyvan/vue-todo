import Router from 'vue-router';
import routes from './routes';

// 返回一个方法, 防止服务端渲染内存溢出
export const createRouter = () => {
  return new Router({
    routes
  });
};

export default createRouter;
