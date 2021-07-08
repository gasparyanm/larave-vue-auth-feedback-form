const users = {
    namespaced: true,
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        token: localStorage.getItem('token') ?? '',
        errors: {
            email: [],
            name: [],
            password: [],
            _confirmation: [],
            error: ''
        }
    },
    getters: {
        getIsLoggedIn: function (state){
            return state.isLoggedIn;
        },
        getErrors: function (state){
            return state.errors;
        },
    },
    mutations: {
        setIsLoggedIn(state, data) {
            state.isLoggedIn = data
        },
        setToken(state, data) {
            state.token = data
        },
        setErrors(state, data) {
            state.errors = data
        }
    },
    actions: {
        login({commit, dispatch}, data) {
            // @TODO: move paths to constants
            return axios.post('/api/auth/login', data)
                .then(response => {
                    commit('setToken', response.data.token)
                    dispatch('updateLocalStorage', response.data.token)
                    commit('setIsLoggedIn', true)
                    commit('setErrors', {})

                    return response
                }).catch(function (error) {
                    if (error.response) {
                        if (error.response.data.error) {
                            commit('setErrors', {...error.response.data})
                        } else {
                            commit('setErrors', {...error.response.data.errors})
                        }
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }

                    return error.response
            });
        },
        updateLocalStorage({commit}, data) {
            localStorage.setItem('token', data)
        }
    }
};

export default users;
