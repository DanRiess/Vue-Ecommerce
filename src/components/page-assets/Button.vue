<template>
  <button
    :disabled="disabled"
    @click="clickFunction"
    :style="{ transform: 'scale(' + scale + ')' }"
  >
    {{ name }}
  </button>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    props: {
      name: String,
      products: [Array, Object],
      click: String,
      scale: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      disabled() {
        if (this.name === "Checkout") {
          if (this.products.length > 0) {
            return false;
          } else {
            return true;
          }
        } else if (this.name === "Add to cart!") {
          if (this.products.stock > 0) {
            return false;
          } else {
            return true;
          }
        }
        return true;
      },
    },
    methods: {
      clickFunction() {
        if (this.click === "checkout") {
          this.checkout(this.products);
        } else if (this.click === "add") {
          this.addProductToCart(this.products);
        }
      },
      ...mapActions("cart", ["checkout", "addProductToCart"]),
    },
  };
</script>

<style scoped>
  button {
    color: black;
    background-color: #5fa8d3;
    font-size: 1.2rem;
    font-weight: 500;
    border: 1px solid black;
    border-radius: 5px;
    width: 120px;
    height: 30px;
    padding: 3px;
    cursor: pointer;
    transition: all 0.1s ease;
  }
  button:disabled {
    background: #bbb;
  }
  button:hover:not(:disabled) {
    /* no animation if button is disabled */
    background: white;
  }
</style>
