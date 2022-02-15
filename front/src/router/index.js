import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';

const routes = [
  {
    path: '/products',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/products'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
