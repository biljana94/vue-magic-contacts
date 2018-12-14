import Vue from 'vue';
import VueRouter from 'vue-router';

import ContactList from './components/ContactList.vue';
import Login from './components/auth/Login.vue';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: ContactList, name: 'home' },
    { path: '/login', component: Login, name: 'login', meta: { guest: true } }, //stavili smo meta podatak na rutu da gost moze da pristupi ovoj ruti a za sve ostale rute treba autentifikacija
    // { path: '*', component: ContactList, name: 'not-found' },
];

export const router = new VueRouter({
    mode: 'history',
    routes
});

//globalni gard
router.beforeEach((to, from, next) => {
    //mozemo koristiti i parseInt() ili +'1' za kastovanje
    const isAuthenticated = !!localStorage.getItem('token'); //!! - castujemo token u boolean tip

    //ako je autentifikovan
    if(isAuthenticated && to.meta.guest) {
        return next({ name: 'home' }); //pusti ga na ovu stranicu ako je autentifikovan
    }

    //ako nije autentifikovan
    if(!isAuthenticated && !to.meta.guest) {
        return next({ name: 'login' }); //vrati ga na ovu stranicu
    }

    return next();
});
