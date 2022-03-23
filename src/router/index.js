import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/home/Home'
import Search from '../pages/Search'
import SingleMovie from '../pages/SingleMovie'
import SinglePeople from '../pages/SinglePeople'
import SingleTvShow from '../pages/SingleTvShow'
import PageNotFound from '../pages/PageNotFound'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/movie/:id',
        name: 'singleMovie',
        component: SingleMovie
    },
    {
        path: '/people/:id',
        name: 'singlePeople',
        component: SinglePeople
    },
    {
        path: '/tv-show/:id',
        name: 'singleTvShow',
        component: SingleTvShow
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    },

]

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes
})

export default router
