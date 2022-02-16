<template>
  <div id="cart">
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some
      <router-link to="/products">
        <strong>items</strong>
      </router-link>
      to the cart!
    </p>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="cartItem in cartItems"
        :key="cartItem.id"
      >
        <CartListItem :cartItem="cartItem" />
      </li>
    </ul>
    <p>
      Total quantity:
      <span class="has-text-weight-bold">{{ cartQuantity }}</span>
    </p>
    <p>
      Total cost:
      <span>$ {{ cartTotal }}</span>
    </p>
    <div>
      <button
        :disabled="cartTotal == 0"
        class="btn btn-success"
        @click="goToPayment"
      >
        Checkout
      </button>
      &nbsp;
      <button class="btn btn-danger" @click="removeAllCartItems">
        Clear Cart
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Cart_List_Item";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {},
  methods: {
    ...mapActions(["removeAllCartItems"]),
    goToPayment(){
      this.$router.push('/payment')
    }
  },
};
</script>
