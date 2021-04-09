/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import users from './modules/users';
import posts from './modules/posts';
Vue.use(Vuex);

const storeData = {
  modules: {
    users, posts
  }
}
const store = new Vuex.Store(storeData)
export default store
