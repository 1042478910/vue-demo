import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const state  = {
    count :1
}
const mutations = {
    increate(state){
        state.count ++
    },
    decreate(state){
        state.count--
    }
    
}
const actions = {
    increate({commit}){
        commit('increate')
    },
    decreate({commit}){
        commit('decreate')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})