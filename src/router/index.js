import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NewMenu from '../views/NewMenu.vue'
import SingleMenu from '../views/SingleMenu.vue'
import DrinkMenu from '../views/DrinkMenu.vue'
import AboutUs from '../views/AboutUs.vue'
import Notification from '../views/Notification.vue'
import Access from '../views/Access.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newMenu',
    name: 'newMenu',
    component: NewMenu
  },
  {
    path: '/singleMenu',
    name: 'singleMenu',
    component: SingleMenu
  },
  {
    path: '/drinkMenu',
    name: 'drinkMenu',
    component: DrinkMenu
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/notification',
    name: 'notification',
    component: Notification
  },
  {
    path: '/access',
    name: 'access',
    component: Access
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
