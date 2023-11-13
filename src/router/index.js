import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import DonateView from '../views/DonateView.vue'
import EventsView from '../views/EventsView.vue'
import HomeView from '../views/HomeView.vue'
import LearnView from '../views/LearnView.vue'
import ReadView from '../views/ReadView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonateView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/learn',
    name: 'learn',
    component: LearnView
  },
  {
    path: '/read',
    name: 'read',
    component: ReadView
  },

]

const router = new VueRouter({
  routes
})

export default router
