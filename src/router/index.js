/*
 * @Author: your name
 * @Date: 2020-09-18 15:10:21
 * @LastEditTime: 2020-09-18 16:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\router\index.js
 */
import {
  createRouter,
  createWebHistory
} from 'vue-router';
import ToDay from '@/views/ToDay'
const routes = [{
    path: '/',
    name: 'today',
    component: ToDay,
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import('../views/Tomorrow'),
  },
  {
    path: '/week',
    name: 'week',
    component: () => import('../views/Week'),

  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../views/Month'),

  },
  {
    path: '/year',
    name: 'year',
    component: () => import('../views/Year'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router