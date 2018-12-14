
import { contactsService } from './../services/contacts-service.js';

export default {
    state: {
        data: [], //lista kontakata

        // pagination: {
        //     total: 0, //koliko ukupno ima kontakata
        //     per_page: 10, //koliko kontakata ima po stranici
        //     current_page: 1, //trenutna stranica
        // },

        total: 0, //koliko ukupno ima kontakata
        per_page: 10, //koliko kontakata ima po stranici
        current_page: 1, //trenutna stranica
        errors: null,
    },

    mutations: {
        SET_ERRORS(state, payload) {
            state.errors = payload;
        },

        //prvi nacin
        //{ data, total, per_page, current_page } - raspakovan payload
        //mutacija sa destruktorom - raspakovan payload
        // SET_CONTACTS(state, { data, total, per_page, current_page }) {
        //     state = {
        //         ...state, //uzimamo ceo state i gazimo njegov data, total, per_page, current_page; raspakovali smo ceo state
        //         data,
        //         total,
        //         per_page,
        //         current_page
        //     }
        // },

        //drugi nacin
        SET_CONTACTS(state, payload) {
            state.data = payload.data;
            state.total = payload.total;
            state.per_page = payload.per_page;
            state.current_page = payload.current_page;
        },

        // SET_PAGINATION(state, payload) {
        //     state.pagination = payload;
        // },
    },

    actions: {
        //context - pozivamo commit nad contextom => context.commit; ako pisemo {commit} uzimamo raspakovan context
        async getContacts(context, payload) {
            try {
                const contactsData = await contactsService.getContacts(payload);
                context.commit('SET_CONTACTS', contactsData);
            } catch(errors) {
                context.commit('SET_ERRORS', errors);
            }
        },
    },

    getters: {
        getContactsData(state) {
            return state.data;
        },

        getCurrentPage(state) {
            return state.current_page;
        },

        getTotalNumberOfContacts(state) {
            return state.total;
        },

        getNumberOfContactsPerPage(state) {
            return state.per_page;
        },
    },
}
