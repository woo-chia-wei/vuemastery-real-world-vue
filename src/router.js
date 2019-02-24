import Vue from "vue";
import Router from "vue-router";
import EventCreate from "./views/EventCreate.vue";
import EventList from "./views/EventList.vue";
import EventShow from "./views/EventShow.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: EventList },
    { path: "/event/:id", component: EventShow, props: true},
    { path: "/event/create", component: EventCreate },
  ]
});
