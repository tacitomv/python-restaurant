<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h4>Order #{{ order.id }}</h4>
      <p>$ {{ order.total }}</p>

      <ul>
        <li v-for="item in orders.items" :key="item.id">
          {{ item.name }}
          <br />
          {{ item.quantity }} x $ {{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "OrderListItem",
  props: ["order"],
  methods: {},
};
</script>
