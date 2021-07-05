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
                                        <span>Please sign up here</span>
                                    </h4>
                                </div>
                                <form ref="form">
                                    <b-form-group id="nameGroup1"
                                                  label-for="nameInput">
                                        Name
                                        <b-form-input id="nameInput"
                                                      type="text"
                                                      name="name"
                                                      v-model="name"
                                                      required
                                                      placeholder="Enter name...">
                                        </b-form-input>
                                    </b-form-group>

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
                                    </b-form-group>

                                    <b-form-group id="password_confirmationGroup"
                                                  label-for="password_confirmationInput">
                                        Password
                                        <b-form-input id="password_confirmationInput"
                                                      type="password_confirmation"
                                                      name="password_confirmation"
                                                      v-model="password_confirmation"
                                                      required
                                                      placeholder="Enter password_confirmation...">
                                        </b-form-input>
                                    </b-form-group>

                                </form>
                                <div class="divider"/>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-right">
                                    <b-button variant="primary" @click="register" size="lg">Register</b-button>
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
    export default {
        name: "Register",
        data() {
            return {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        },
        methods: {
            register: function () {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
                this.$store.dispatch('register', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>
