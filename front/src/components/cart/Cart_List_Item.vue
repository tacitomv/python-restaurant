<template>
  <div class="col-ms-3">
    <div class="card">
      <div class="card-body">
        <p>{{ cartItem.title }}</p>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{ cartItem.price }} X {{ cartItem.quantity }}
        </span>

        <button
          type="button"
          class="btn btn-primary"
          @click="addCartItem(cartItem)"
        >
          + Item
        </button>

        <button
          type="button"
          class="btn btn-primary"
          @click="removeCartItem(cartItem)"
        >
          - Item
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"]),
  },
};
</script>
