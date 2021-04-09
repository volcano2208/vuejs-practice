/* eslint-disable */
// eslint-disable-next-line
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import UserList from '../views/User-List.vue';
import PostList from '../views/Post-List.vue';
import UserDetail from "../views/User-Detail.vue";
import PostDetail from "../views/Post-Detail.vue";


Vue.use(VueRouter);
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/post-list',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/user-detail/:id',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/post-detail/:id',
    name: 'PostDetail',
    component: PostDetail
  }
];
const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
