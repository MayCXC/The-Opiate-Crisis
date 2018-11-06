import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import LandingPage from './components/LandingPage.vue'
import EducateYourself from './components/EducateYourself.vue'
import ConnectWithPeople from './components/ConnectWithPeople.vue'
import EngageWithPeople from './components/EngageWithPeople.vue'
import AnalyzeBias from './components/AnalyzeBias.vue'
import RegisterToVote from './components/RegisterToVote.vue'
import Congratulations from './components/Congratulations.vue'

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/educate-yourself',
      name: 'educateYourself',
      component: EducateYourself
    },
    {
      path: '/connect-with-people',
      name: 'connectWithPeople',
      component: ConnectWithPeople
    },
    {
      path: '/engage-with-people',
      name: 'engageWithPeople',
      component: EngageWithPeople
    },
    {
      path: '/analyze-bias',
      name: 'analyzeBias',
      component: AnalyzeBias
    },
    {
      path: '/register-to-vote',
      name: 'registerToVote',
      component: RegisterToVote
    },
    {
      path: '/congratulations',
      name: 'congratulations',
      component: Congratulations
    },
  ],
  mode: 'history'
})
