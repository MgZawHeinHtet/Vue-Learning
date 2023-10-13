import { createRouter, createWebHashHistory } from "vue-router";
import PageContent from "./views/PageContent.vue";
import CreatePage from "./views/CreatePage.vue";
import HelloPage from "./components/HelloPage.vue";
import Pages from './views/Pages.vue';
import PageList from './views/PageList.vue'
import EditPage from './views/EditPage'
import Todo from './views/Todo'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HelloPage },
    {
      path: "/pages", component: Pages, children: [
        { path: "create", component: CreatePage },
        { path: ":index?", component: PageContent, props: true },
        { path: ":index/edit", component: EditPage, props: true }
      ]
    },
    {
      path: '/list', component: PageList
    },
    {
      path: '/todo',component : Todo
    }
  ],
});

export default router;
