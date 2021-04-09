/* eslint-disable */

import axios from "axios";

const postsModule = {
    state: {
        posts: []
    },
    getters: {
        posts: state => state.posts,
    },
    actions: {
        async getPosts({ commit }) {
            try {
                const res = await axios
                    .get('https://jsonplaceholder.typicode.com/posts')
                commit('SET_POSTS', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getPostById({ commit }, id) {
            try {
                await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                commit('FILTER_POST', id);
            } catch (error) {
                console.log(error)
            }
        },
        async deletePost({ commit }, id) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
                commit('REMOVE_POST', id);
            } catch (error) {
                console.log(error);
            }
        },
        async updatePost({ commit }, updatedPost) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost);
                commit('UPDATE_POST', response.data);
            } catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        FILTER_POST: (state, id) => {
            state.posts = state.posts.filter(post => post.id == id);
        },
        REMOVE_POST: (state, id) => state.posts = state.posts.filter((post) => post.id !== id),
        UPDATE_POST: (state, updatedPost) => {
            const index = state.posts.findIndex(post => post.id === updatedPost.id);
            if (index !== -1) {
                state.posts.splice(index, updatedPost);
            }
        },
    }
}
export default postsModule
