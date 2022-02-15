<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 align-items-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/core/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}
</style>
