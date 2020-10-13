<template>
  <div class="cart-item">
    <div class="image">
      <img :src="getImgUrl(product.img)" />
    </div>
    <div class="name">{{ product.name }}</div>
    <div class="brand">{{ product.brand }}</div>
    <div class="price">{{ product.price.toLocaleString() }} VND</div>
  </div>
</template>

<script>
  export default {
    props: {
      product: Object,
    },
    methods: {
      getImgUrl(img) {
        return require("../../assets/pictures/bags/" + img);
      },
    },
  };
</script>

<style scoped>
  .cart-item {
    width: 90%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(45, 45, 63, 0.514);
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 1%;
    margin-bottom: 1%;
  }
  .image {
    flex-grow: 1;
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image img {
    max-height: 90%;
    max-width: 90%;
    height: auto;
    width: auto;
  }
  .name {
    flex-grow: 1;
    border-right: 1px solid rgba(255, 255, 255, 0.534);
    border-left: 1px solid rgba(255, 255, 255, 0.534);
  }
  .brand {
    border-right: 1px solid rgba(255, 255, 255, 0.534);
    flex-grow: 1;
  }
  .price {
    flex-grow: 1;
  }
</style>
