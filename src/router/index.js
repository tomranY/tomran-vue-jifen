import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/Goods.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
    redirect:'/user/cart',
    children:[
      {
        path:'cart',
        component: () => import('../components/user/Cart.vue')
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/free',
    name: 'free',
    component: () => import('../views/Free.vue'),
    redirect:'/free/person',
    children:[
      {
        path:'person',
        component: () => import('../components/free/Person.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//配置全局路由守卫（拦截器）
//to即将跳转的路由
//from即将离开的路由
//next即将执行的路由  next()放行
router.beforeEach((to,from,next) =>{
  if(to.path === '/user/cart'||to.path === '/order'||to.path === '/free/person'){
    if(localStorage.getItem('x-auth-token')){
      next();
    }else{
      //router如何调用vuex的changeShowLoginModal
      router.app.$options.store.commit('changeShowLoginModal',true);
      //store.commit('changeShowLoginModal',true);
    }
  }else{
    next()
  }
})

export default router
