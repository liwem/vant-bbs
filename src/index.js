import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import { Icon, Lazyload, Swipe, SwipeItem, Search, Toast, Tab, Tabs, Tabbar, TabbarItem, Cell, CellGroup, Loading, Field, Button, Image } from 'vant';

// import 'bootstrap/dist/css/bootstrap.css';

Vue
  .use(Tabbar)
  .use(Search)
  .use(Icon)
  .use(Lazyload)
  .use(Swipe)
  .use(SwipeItem)
  .use(TabbarItem)
  .use(Cell)
  .use(CellGroup)
  .use(Loading)
  .use(Field)
  .use(Button)
  .use(Image)
  .use(Toast)
  .use(Tab)
  .use(Tabs)  ;

Vue.prototype.$http = axios.create({
  baseURL: 'http://47.111.115.126/api',
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
