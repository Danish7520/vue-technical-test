import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Task1 from '../views/Task1.vue'
import Task2 from '../views/Task2.vue'
import Task3 from '../views/Task3.vue'
import Task4 from '../views/Task4.vue'
import Task5 from '../views/Task5.vue'
import Task6 from '../views/Task6.vue'
import Task7 from '../views/Task7.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/task-1',
      name: 'task1',
      component: Task1
    },
    {
      path: '/task-2',
      name: 'task2',
      component: Task2
    },
    {
      path: '/task-3',
      name: 'task3',
      component: Task3
    },
    {
      path: '/task-4',
      name: 'task4',
      component: Task4
    },
    {
      path: '/task-5',
      name: 'task5',
      component: Task5
    },
    {
      path: '/task-6',
      name: 'task6',
      component: Task6
    },
    {
      path: '/task-7',
      name: 'task7',
      component: Task7
    }
  ]
})

export default router
