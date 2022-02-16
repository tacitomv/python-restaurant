import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';
import Payment from '../components/payment/Payment.vue';
import OrderList from '../components/order/Order_List.vue';

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
    path: '/payment',
    component: Payment
  },
  {
    path: '/orders',
    component: OrderList
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
