/* eslint-disable */

import axios from "axios";

const usersModule = {
    state: {
        users: []
    },
    getters: {
        users: state => state.users,
    },
    actions: {
        async getUsers({ commit }) {
            try {
                const res = await axios
                    .get(`http://jsonplaceholder.typicode.com/users`)
                commit('SET_USERS', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteUser({ commit }, id) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
                commit('REMOVE_USER', id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateUser({ commit }, updatedUser) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser);
                commit('UPDATE_USER', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getUserById({ commit }, id) {
            try {
                await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                commit('FILTER_USER', id);
            } catch (error) {
                console.log(error);
            }
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },
        REMOVE_USER: (state, id) => state.users = state.users.filter((user) => user.id !== id),
        UPDATE_USER: (state, updatedUser) => {
            const index = state.users.findIndex(user => user.id === updatedUser.id);
            if (index !== -1) {
                state.users.splice(index, updatedUser);
            }
        },
        FILTER_USER: (state, id) => {
            state.users = state.users.filter(user => user.id == id);
        },
    }
}


export default usersModule
