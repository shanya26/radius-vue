import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/store"
// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/dashboard/Dashboard')
const Home = () => import('@/views/home/Home')
 
// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const ForgotPassword = () => import('@/views/pages/ForgotPassword')
const Confirm = () => import('@/views/pages/Confirm')
const UserList = () => import('@/views/manage/UserList')
const TrafficPlan = () => import('@/views/traffic/TrafficPlan')
const NAS = () => import('@/views/NAS/NAS')
const Settings = () => import('@/views/utils/Settings')
const ManageUser = () => import('@/views/manage/ManageUser')
 
Vue.use(Router)

let router =  new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  routes: configRoutes()  
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {    
      requireAuth(to, from, next)  
    }else {
      next()
    }
    if (to.matched.some(record => record.meta.loader)) {    
      store.commit('setLoading', true)    
      next()
    }
});
router.afterEach((to, from) => {
  store.commit('setLoading', false)
});
function requireAuth(to, from, next) {
  
  if(isValidSession()){
      store.state.loggedIn = true
      if(to.path=="/login"){
          next({
            path: '/home',
            query: { redirect: to.fullPath }
         });
          return
      }
      next();        
  }else{
      store.state.loggedIn = false
      store.dispatch("logout") 
      if(to.path=="/login" || to.path=="/home"){
          next()
      }else{
          next({
            path: '/login',
            query: { redirect: to.fullPath }
         });
      }
  } 
  return;
}

function isValidSession(){
    let accessToken = JSON.parse(localStorage.getItem("accesstoken"))
    let idToken = JSON.parse(localStorage.getItem("idToken"))
    let clockDrift = JSON.parse(localStorage.getItem("clockDrift"))
    var now = Math.floor(new Date() / 1000);
    var adjusted = now - clockDrift;
    if(accessToken && idToken){
        return adjusted < accessToken.payload.exp && adjusted < idToken.payload.exp;  
    }    
}

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/home',
      name: '',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
              requiresAuth: true
          },
          component: Dashboard
        },
        {
          path: '/UserList',
          name: 'Users',
          meta: {
                requiresAuth: true
          },
          component: UserList
        },
        {
          path: '/manageUser',
          name: 'Manage User',
          meta: {
                requiresAuth: true
          },
          component: ManageUser
        },
        
        {
          path: '/TrafficPlan',
          name: 'Traffic Plan',
          meta: {
                requiresAuth: true
          },
          component: TrafficPlan
        },
         {
          path: '/NAS',
          name: 'NAS',
          meta: {
                requiresAuth: true
          },
          component: NAS
        },
         {
          path: '/Settings',
          name: 'Settings',
          meta: {
                requiresAuth: true
          },
          component: Settings
        }         
      ]
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
            requiresAuth: true,
            loader:true
      },
      component: Home
    },    
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { 
          layout: 'userpages',
          requiresAuth: true,
          loader:true
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { 
          layout: 'userpages',
          loader:true
      }
    },
    {
      path: '404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
          layout: 'userpages',
          loader:true
      }
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm,
      meta: {
          layout: 'userpages',
          loader:true
      }
    },
    {
        path: '*',
        name: 'pagenotfound',
        meta: {layout: 'userpages',loader:true},
        component: Page404,
    },
  ]
}

export default router;