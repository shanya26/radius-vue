import Vue from 'vue'
import App from './App'
import router from './router'
import Pages from '@/containers/pagesLayout.vue';
import Default from '@/containers/baseLayout.vue';
import CoreuiVue from '@coreui/vue'
import {BootstrapVue,IconsPlugin } from "bootstrap-vue"
import { iconsSet as icons } from './assets/icons/icons.js'
import CognitoAuth from "./cognito/cognito";
import store from './store/store'
import './i18n/index'
import axios from 'axios';
import $ from "jquery"

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(icons)
Vue.use($)
Vue.component('userpages-layout', Pages);
Vue.component('default-layout', Default);
if(localStorage.getItem("idToken")){
  let token = JSON.parse(localStorage.getItem("idToken")).jwtToken;
  axios.defaults.headers.common['X-COG-AUTH'] = token
}

Vue.mixin({
  data: function() {
    return {
      get cognitogroup() {
        return localStorage.getItem("usergroup")?JSON.parse(localStorage.getItem("usergroup")).toString():""
      },
      get cognitouser() {
        return localStorage.getItem("username");
      },
      get sub() {
        return localStorage.getItem("sub");
      }
    }
  }
})
$(window).on('scroll load', function() {
    if ($(".navbar").length && $(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
});
new Vue({
  el: '#app',
  router,
  icons,
  store,
  template: '<App/>',
  components: {
    App
  },
})
