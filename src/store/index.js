import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nav_active:0,
        user_info:{},
        uid:0
    },
    mutations: {},
    actions: {},
    getters: {},
    modules:{}
});