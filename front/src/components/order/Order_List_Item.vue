<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h4>Order #{{ order.id }}</h4>
      <p>
        Total: $ {{ order.total }} <br />
        Total Items: {{ order.quantity }}
      </p>

      <ul>
        <li v-for="item in order.items" :key="item">
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
