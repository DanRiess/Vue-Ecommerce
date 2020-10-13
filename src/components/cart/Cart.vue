<template>
  <div class="cart">
    <div class="left">
      <p v-show="!products.length">
        <i>Please add some products to your cart.</i>
      </p>
      <template v-for="product in products" :key="product.id">
        <CartItem :product="product" />
      </template>
      <div class="total" v-show="products.length">
        <p>Total: {{ total.toLocaleString() }} VND</p>
      </div>
    </div>
    <div class="right">
      <CheckoutForm />
      <Button name="Checkout" :products="products" click="checkout" />
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  import Button from "../page-assets/Button";
  import CartItem from "./CartItem";
  import CheckoutForm from "./CheckoutForm";

  export default {
    components: {
      Button,
      CartItem,
      CheckoutForm,
    },
    computed: {
      ...mapState({
        checkoutStatus: state => state.cart.checkoutStatus,
      }),
      ...mapGetters("cart", {
        products: "cartProducts",
        total: "cartTotalPrice",
      }),
    },
  };
</script>

<style scoped>
  .cart {
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
  .left {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  .total {
    width: 80%;
    color: #5fa8d3;
    text-shadow: 1px 1px 2px black;
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
  .right {
    width: 30%;
    height: 100%;
    background: rgb(12, 34, 41);
    background: radial-gradient(circle, rgba(12, 34, 41, 1) 0%, rgba(54, 67, 71, 1) 100%);
  }
</style>
