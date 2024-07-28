
import { createRouter, createWebHistory } from 'vue-router';
import InspectionList from '../components/InspectionList.vue';


const routes = [
  {
    path: '/',
    name: 'inspection-list',
    component: InspectionList,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
