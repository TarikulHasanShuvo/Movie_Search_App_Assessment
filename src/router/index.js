import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home'
import Search from '../pages/Search'
import SingleSearch from '../pages/SingleSearch'

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
        path: '/single-search',
        name: 'singleSearch',
        component: SingleSearch
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
