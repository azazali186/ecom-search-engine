// router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage/Index.vue'
import ProductView from '../components/Product/Details.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/product/:id', component: ProductView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
