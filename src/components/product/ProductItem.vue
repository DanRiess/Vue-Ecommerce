<template>
  <div class="item-container">
    <div class="image">
      <img :src="getImgUrl(product.img)" />
    </div>
    <div class="text">
      <div class="text-top">
        <div class="text-header">
          <div class="text-name">
            {{ product.name }}
          </div>
          <div class="text-brand">by {{ product.brand }}</div>
        </div>
        <div class="text-price">{{ product.price.toLocaleString() }} VND</div>
      </div>
      <div class="text-description">
        {{ product.description }}
      </div>
      <div class="button">
        <Button name="Add to cart!" click="add" :products="product" :scale="0.9" />
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "../page-assets/Button";

  export default {
    components: {
      Button,
    },
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
  .item-container {
    height: 30rem;
    width: 20rem;
    min-width: 260px;
    margin: 1rem;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 10px white;
    transition: all 0.1s ease;
  }
  .item-container:hover {
    transform: scale(1.03);
  }
  .image {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 40%;
  }
  .text-top {
    display: flex;
    justify-content: space-around;
    height: 40%;
  }
  .text-name {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .text-brand {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .text-price {
    color: #5fa8d3;
    text-shadow: 1px 1px 2px black;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-description {
    color: white;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .button {
    display: flex;
    justify-content: center;
    height: 20%;
  }
</style>
