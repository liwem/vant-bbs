import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Posts from './pages/Posts.vue';
import Login from './pages/Login.vue';
import My from './pages/My.vue';
import Post from './pages/Post.vue';
import Register from './pages/Register.vue';
import Thread from './pages/Thread.vue';



export default new Router({
  routes: [
    { path: '/', component: Posts },
    { path: '/tokens/create', component: Login },
    { path: '/my', component: My },
    { path: '/register', component: Register },
    { path: '/Post', component: Post },
    { path: '/threads/:id', component: Thread },
  ],
});
