import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import NewMenu from '../views/NewMenu.vue'
import SingleMenu from '../views/SingleMenu.vue'
import DrinkMenu from '../views/DrinkMenu.vue'

import AboutUs from '../views/AboutUs.vue'
import Notification from '../views/Notification.vue'
import Access from '../views/Access.vue'

import FriedFoodMenu from '../views/FriedFoodMenu.vue'
import RiceMenu from '../views/RiceMenu.vue'
import SaladMenu from '../views/SaladMenu.vue'
import SoupMenu from '../views/SoupMenu.vue'
import QuickMenu from '../views/QuickMenu.vue'
import SpecialMenu from '../views/SpecialMenu.vue'

import AlcoholMenu from '../views/AlcoholMenu.vue'
import SoftDrinkMenu from '../views/SoftDrinkMenu.vue'

// 
import AddFoodMenu from '../views/AddFoodMenu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friedFoodMenu',
    name: 'friedFoodMenu',
    component: FriedFoodMenu
  },
  {
    path: '/riceMenu',
    name: 'riceMenu',
    component: RiceMenu
  },
  {
    path: '/saladMenu',
    name: 'saladMenu',
    component: SaladMenu
  },
  {
    path: '/soupMenu',
    name: 'soupMenu',
    component: SoupMenu
  },
  {
    path: '/quickMenu',
    name: 'quickMenu',
    component: QuickMenu
  },
  {
    path: '/specialMenu',
    name: 'specialMenu',
    component: SpecialMenu
  },
  {
    path: '/alcohol',
    name: 'alcohol',
    component: AlcoholMenu
  },
  {
    path: '/softdrink',
    name: 'softdrink',
    component: SoftDrinkMenu
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
  },

  //
  {
    path: '/addFoodMenu',
    name: 'addFoodMenu',
    component: AddFoodMenu
  } 

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
