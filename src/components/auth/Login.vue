<template>
    <form class="form-signin" @submit.prevent="submitForm">
        <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label class="sr-only">Email address</label>
        <input type="text" class="form-control" placeholder="Email address" autofocus="" v-model="email">

        <label class="sr-only">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        ...mapActions(['login']),

        //ova fnc ne sme da se zove isto kao akcija iz store-a jer ce je ova fnc pregaziti
        submitForm() {
            // console.log({ email: this.email, password: this.password });
            //payload je objekat i morali smo da prosledimo email i password kao objekat
            this.login({
                email: this.email,
                password: this.password,
                nextRouteName: 'home',
            });
        },
    },

    computed: {
        // ...mapGetters(),
    },
}
</script>

<style>

</style>
