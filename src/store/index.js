import Vue from 'vue';
import Vuex from 'vuex';
import aa from './modules/a.js';
import bb from './modules/b.js';

Vue.use(Vuex)

export default  new Vuex.Store({
    modules:{
        aa,
        bb
    }
})