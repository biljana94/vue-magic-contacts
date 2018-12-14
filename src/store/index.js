import Vue from 'vue';
import Vuex from 'vuex';


import contactsStore from './contacts-store.js';
import authStore from './auth-store.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        contactsStore,
        authStore,
    }
});

export default store;
