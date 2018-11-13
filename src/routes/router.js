import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import FamilyInfo from './FamilyInfo.vue'
import FamilyTreatment from './FamilyTreatment.vue'
import UserInfo from './UserInfo.vue'
import UserTreatment from './UserTreatment.vue'

// dynamically load four pages, one for each combonation of options in App.vue
export default new Router({
  routes: [
    {
      path: '/family/info',
      name: 'familyInfo',
      component: FamilyInfo
    },
    {
      path: '/family/treatment',
      name: 'familyTreatment',
      component: FamilyTreatment
    },
    {
      path: '/user/info',
      name: 'userInfo',
      component: UserInfo,
    },
    {
      path: '/user/treatment',
      name: 'userTreatment',
      component: UserTreatment,
    }
  ],
  mode: 'history'
})
