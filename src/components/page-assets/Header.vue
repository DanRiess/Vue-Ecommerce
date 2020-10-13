<template>
  <div class="left">
    <div class="logo">
      <router-link to="/"><img src="../../assets/HangSiCindy.png"/></router-link>
    </div>
    <div class="divider"></div>
    <div class="route-text">
      <h2>{{ routeName }}</h2>
    </div>
  </div>
  <div class="options">
    <div class="placeholder"></div>
    <div class="cart">
      <router-link to="/cart">
        <IconBase name="checkout" :width="36" :height="36">
          <ShoppingcartIcon />
        </IconBase>
        <h2>{{ cartLength }}</h2></router-link
      >
    </div>
    <div class="menu"></div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import IconBase from "./IconBase";
  import ShoppingcartIcon from "../../assets/ShoppingcartIcon";

  export default {
    components: {
      IconBase,
      ShoppingcartIcon,
    },
    data() {
      return {
        routeName: null,
      };
    },
    watch: {
      $route: "currentRoute",
    },
    computed: {
      ...mapGetters("cart", {
        cartLength: "cartLength",
      }),
    },
    methods: {
      currentRoute() {
        this.$nextTick(() => {
          this.routeName = this.$route.name;
        });
      },
    },
  };
</script>

<style scoped>
  .left {
    width: 40%;
    display: flex;
    align-items: center;
  }
  .logo {
    height: 100%;
    padding-right: 10%;
  }
  .logo img {
    height: 100%;
    width: auto;
    border-radius: 50%;
    box-shadow: 5px 5px 6px #c4c4c4;
  }
  .divider {
    height: 50%;
    width: 3px;
    background: white;
    box-shadow: 3px 2px 2px rgba(255, 255, 255, 0.486);
  }
  .route-text {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10%;
  }
  .options {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .cart {
    width: 100px;
    height: 40px;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 5px 5px 5px #888;
    transition: all 0.15s ease;
  }
  .cart:hover {
    transform: scale(1.05);
  }
  .cart * {
    cursor: pointer;
  }
  .cart a {
    width: 100%;
    height: 100%;
    display: inline-block;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .cart a:link {
    color: black;
    text-decoration: none;
  }
  .cart a:visited {
    color: black;
    text-decoration: none;
  }
  .cart h2 {
    display: inline-block;
    height: 100%;
    width: 30%;
    font-size: 1.6rem;
    line-height: 150%;
  }
</style>
