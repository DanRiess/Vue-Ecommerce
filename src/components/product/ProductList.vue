<template>
  <div class="product-list">
    <template v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </template>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import ProductItem from "./ProductItem";
  export default {
    created() {
      this.$store.dispatch("products/getAllProducts");
    },
    computed: mapState({
      products: state => state.products.all,
    }),
    components: {
      ProductItem,
    },
  };
</script>

<style>
  .product-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-y: auto;
  }
</style>
