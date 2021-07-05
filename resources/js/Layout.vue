<template>
    <div>
        <div id="nav">
            <router-link v-if="!isLoggedIn" to="/login">login |</router-link>
            <router-link v-if="!isLoggedIn" to="/register">Register |</router-link>
            <a @click="logout" v-if="isLoggedIn">Logout</a>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Layout',
        computed : {
            ...mapGetters({
                'isLoggedIn': 'users/getIsLoggedIn',
            })
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        },
    }
</script>

<style scoped>

</style>
