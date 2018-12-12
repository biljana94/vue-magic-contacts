<template>
    <p>Contact List</p>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ContactList', //mozemo je globalno koristiti ako je imenujemo, ne moramo je importovati

    methods: {
        //vraca ono sto nama treba da ne moramo da koristimo propove
        ...mapActions([
            'getContacts',
        ]),
    },

    // computed: {
    //     ...mapGetters({
    //         contacts: 'getContactsData',
    //         currentPage: 'getCurrentPage',
    //         totalNumOfContacts: 'getTotalNumberOfContacts',
    //         contactsPerPage: 'getNumberOfContactsPerPage',
    //     }),
    // },

    created() {
        this.getContacts();
    },
}
</script>

<style>

</style>
