<template>
  <div class="container">
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3"
        v-for="productItem in productItems"
        :key="productItem.id"
      >
        <ProductListItem :productItem="productItem" />
      </div>
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
