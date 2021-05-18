
import SVG from '@/view/svg/svg.vue'
export default [
      {
        path: '/',
        name: 'Home',
        component: SVG
      },
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录',
        },
        component: () => import('@/view/login/login.vue')
      }
    ]