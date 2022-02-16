<template>
  <div class="container">
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3"
        v-for="order in orders"
        :key="order.id"
      >
        <OrderListItem :order="order" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Order_List_Item";
export default {
  name: "OrderList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {},
  methods: {
    ...mapActions(["removeAllCartItems"]),
  },
};
</script>
