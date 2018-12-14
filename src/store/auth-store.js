import { authService } from './../services/auth-service.js';
import { router } from './../router.js';

//nakon reloada da imamo stanje koje smo zeleli
const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
}

export default {
    state: {
        user: getUserFromLocalStorage(),
        token: localStorage.getItem('token'),
        errors: null,
    },
    
    mutations: {
        SET_DATA(state, { user, token }) {
            state.user = user;
            state.token = token;
            state.errors = null; //vratili smo errore na nulu
        },
        SET_ERRORS(state, payload) {
            state.errors = payload;
        },
    },

    actions: {
        async login({ commit }, { email, password, nextRouteName }) {
            try {
                const { user, token } = await authService.login(email, password);
                localStorage.setItem('user', JSON.stringify(user)); //localStorage je globalno dostupan, i ovde u localStorage cuvamo token
                localStorage.setItem('token', token); //(i u ovom slucaju korisnika cuvamo isto)
                authService.setAuthHeaders(token); //pozvali smo fnc iz servisa i prosledili mu token usera da ga autorizuje
                commit('SET_DATA', { user, token });
                router.push({ name: nextRouteName || 'home' }); //redirektovali smo korisnika posle logovanja, a u Login.vue smo napisali nextRouteName
            } catch(error) {
                commit('SET_ERRORS', error.response.data); //imamo 2 tipa errora
            }
            
        },

        logout({ commit }) {
            authService.setAuthHeaders(); //ako ne dobije nista, ona ce skinuti taj header
            localStorage.removeItem('token'); //brisemo token
            localStorage.removeItem('user'); //brisemo usera
            commit('SET_DATA', { user: null, token: null }); //ocistili smo state sa ovim, zbog login i logout
            router.push({ name: 'login' });
        }
    },

    getters: {
        getUser(state) {
            return state.user;
        },

        getErrors(state) {
            return state.errors;
        }
    },
}
