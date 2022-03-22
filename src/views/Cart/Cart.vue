<template>
  <div class="Cart">
    <van-nav-bar :title="'购物车 (' + sum + ')'" />
    <strong>Cart</strong>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      sum: 0,
    };
  },
};
</script>