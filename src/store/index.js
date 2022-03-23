import {createStore} from 'vuex'

export default createStore({
    state: {
        movies: {},
        peoples: {},
        tv_shows: {}
    },
    getters: {},
    mutations: {
        STORE_MOVIES(state, payload) {
            state.movies = payload
        },
        STORE_PEOPLES(state, payload) {
            state.peoples = payload
        },
        STORE_TV_SHOWS(state, payload) {
            state.tv_shows = payload
        },
    },
    actions: {},
    modules: {}
})
