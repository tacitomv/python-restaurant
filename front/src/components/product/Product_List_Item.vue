<template>
  <div class="card mb-4 shadow-sm">
    <img
      :src="'/images/' + productItem.image_id + '.jpg'"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h4>{{ productItem.name }}</h4>
      <p>$ {{ productItem.price }}</p>
      
      <button
        type="button"
        class="btn btn-primary"
        @click="addCartItem(productItem)"
      >Add to Cart</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 250px;
}
</style>