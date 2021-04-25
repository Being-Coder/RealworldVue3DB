import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
    {
        path : '/',
        name  : 'EventList',
        component : EventList
    },
    {
        path : '/event/:id',
        props : true,
        name  : 'EventDetails',
        component : EventDetails
    },
    {
        path : '/about',
        name  : 'About',
        component : About
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes : routes
});
