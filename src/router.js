import Vue from "vue";
import Router from "vue-router";
import FamilyInfo from "./views/FamilyInfo.vue";
import FamilyTreatment from "./views/FamilyTreatment.vue";
import UserInfo from "./views/UserInfo.vue";
import UserTreatment from "./views/UserTreatment.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/family/info",
      name: "familyInfo",
      component: FamilyInfo
    },
    {
      path: "/family/treatment",
      name: "familyTreatment",
      component: FamilyTreatment
    },
    {
      path: "/user/info",
      name: "userInfo",
      component: UserInfo
    },
    {
      path: "/user/treatment",
      name: "userTreatment",
      component: UserTreatment
    }
  ]
});
