<template>
    <section>

        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td>{{ contact.first_name }}</td>
                    <td>{{ contact.last_name }}</td>
                    <td>{{ contact.email }}</td>
                </tr>
            </tbody>
        </table>


<!-- <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav> -->

    </section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ContactList', //mozemo je globalno koristiti ako je imenujemo, ne moramo je importovati

    created() {
        this.getContacts();
    },

    // data() {
    //     return {}
    // },

    methods: {
        //vraca ono sto nama treba da ne moramo da koristimo propove
        ...mapActions([
            'getContacts',
        ]),
    },

    computed: {
        ...mapGetters({
            contacts: 'getContactsData',
            currentPage: 'getCurrentPage',
            totalNumOfContacts: 'getTotalNumberOfContacts',
            contactsPerPage: 'getNumberOfContactsPerPage',
        }),
    },


}
</script>

<style>

</style>
