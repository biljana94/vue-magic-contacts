import Vue from 'vue';
import VueRouter from 'vue-router';

import ContactList from './components/ContactList.vue';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: ContactList, name: 'contact-list' },
];

export const router = new VueRouter({
    mode: 'history',
    routes
});
