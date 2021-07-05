<template>
    <div id="login">
        <div class="h-100 bg-plum-plate-login bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col class="mx-auto app-login-box">
                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <form ref="form">
                                    <b-form-group id="emailGroup1"
                                                  label-for="emailInput">
                                        Email
                                        <b-form-input id="emailInput"
                                                      type="text"
                                                      name="email"
                                                      v-model="email"
                                                      required
                                                      placeholder="Enter email...">
                                        </b-form-input>
                                        <div role="alert" aria-live="polite" aria-atomic="true" class="alert alert-danger" v-if="errors.email && errors.email[0]">
                                            {{ errors.email[0] }}
                                        </div>
                                    </b-form-group>
                                    <b-form-group id="passwordGroup"
                                                  label-for="passwordInput">
                                        Password
                                        <b-form-input id="passwordInput"
                                                      type="password"
                                                      name="password"
                                                      v-model="password"
                                                      required
                                                      placeholder="Enter password...">
                                        </b-form-input>
                                        <div role="alert" aria-live="polite" aria-atomic="true" class="alert alert-danger" v-if="errors.password && errors.password.length">
                                            {{ errors.password[0] }}
                                        </div>
                                        <div role="alert" aria-live="polite" aria-atomic="true" class="alert alert-danger" v-if="errors.error">
                                            {{ errors.error }}
                                        </div>
                                    </b-form-group>

                                </form>
                                <div class="divider"/>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-right">
                                    <b-button variant="primary" @click="doLogin" size="lg">Login</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "Login",
        data(){
            return {
                email : "",
                password : ""
            }
        },
        computed: {
            ...mapGetters({
                'errors': 'users/getErrors'
            })
        },
        watch: {
            errors(val) {
                console.log('errors::', val)
            }
        },
        methods: {
            ...mapActions({
                'login': 'users/login'
            }),
            doLogin: function () {
                let email = this.email
                let password = this.password

                this.login({ email, password })
                    .then((data) => {
                        console.log(data)
                        this.$router.push('/')
                    })
                    // .catch(err => console.log(err, this.errors))
            }
        }
    }
</script>

<style scoped>

</style>

