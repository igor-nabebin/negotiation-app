import Vue from "vue";
import Router from "vue-router";
import EmployerTab from "./views/EmployerTab";
import EmployeeTab from "./views/EmployeeTab";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "employer",
      component: EmployerTab
    },
    {
      path: "/employee",
      name: "employee",
      component: EmployeeTab
    }
  ]
});
