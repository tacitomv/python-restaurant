<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Restaurant</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/products" class="nav-link">
            <b>Products</b>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">
            <b>Cart</b>
            &nbsp;
            <span class="badge badge-light">{{ cartQuantity }}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">
            <span>Total $ {{ cartTotal }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["cartQuantity", "cartTotal"]),
  },
  created() {},
};
</script>
