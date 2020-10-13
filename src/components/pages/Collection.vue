<template>
  <div class="collection">
    <ProductList />
  </div>
</template>

<script>
  import ProductList from "../product/ProductList";

  export default {
    components: {
      ProductList,
    },
  };
</script>

<style>
  .collection {
    height: 80%;
    width: 80%;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
</style>
