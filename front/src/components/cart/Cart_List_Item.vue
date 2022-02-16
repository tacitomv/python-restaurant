<template>
  <div>
    <h4>{{ cartItem.name }}</h4>
    <p>
      Price: ${{ cartItem.price }} <br>
      Quantity: {{ cartItem.quantity }}
    </p>

    <button
      type="button"
      class="btn btn-primary"
      @click="addCartItem(cartItem)"
    >
      +
    </button>
    &nbsp;
    <button
      type="button"
      class="btn btn-danger"
      @click="removeCartItem(cartItem)"
    >
      -
    </button>
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
