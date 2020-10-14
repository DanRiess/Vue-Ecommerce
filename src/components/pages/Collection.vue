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
    height: 90%;
    width: 80%;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  @media only screen and (max-width: 600px) {
    .collection {
      height: 100%;
    }
  }
</style>
