import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ScoreView from '@/views/ScoreView.vue'
import CommentView from '@/views/CommentView.vue'
import MeczView from '@/views/MeczView.vue'
import PremierView from '@/views/leagues/PremierView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mecz/:matchID',
      name: 'mecz',
      component: MeczView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/Score',
      name: 'Score',
      component: ScoreView
    },
    {
      path: '/Comment',
      name: 'Comment',
      component: CommentView
      
    },
    {
      path: '/leagues/PremierLeague',
      name: 'PremierLeague',
      component: PremierView
      
    }
    
    
  ]
})

export default router
