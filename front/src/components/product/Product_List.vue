<template>
  <div class="container">
    <div
      class="tile is-parent"
      v-for="productItem in productItems"
      :key="productItem.id"
    >
      <ProductListItem :productItem="productItem" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Product_List_Item from "./Product_List_Item";
export default {
  name: "ProductList",
  components: {
    ProductListItem: Product_List_Item,
  },
  computed: {
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
};
</script>
