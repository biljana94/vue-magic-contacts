import axios from 'axios';

class ContactsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/';
        //da mi kroz response vrati json -  common['Accept']
        axios.defaults.headers.common['Accept'] = 'application/json';
    }

    //page=1 - za paginaciju, posto imamo 100 kontakata a po 10 ih dovlaci, da nam ne bi dao samo 1 stranicu, ovde smo mu dali default vrednost page=1
    getContacts(page = 1) {
        return axios.get('contacts/', { params: { page } }) //{ params: { page } } - da dovuce sve stranice sa kontaktima
            .then(({ data }) => data);
            //ili: .then(response => response.data)
    }
}

//OVO JE SINGLETON(PATTERN)
export const contactsService = new ContactsService();
