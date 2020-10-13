<template>
  <div class="home">
    <template v-if="highlights.length > 0">
      <Highlight :highlights="highlights" />
    </template>
    <template v-else>
      <h2>Loading...</h2>
    </template>
    <div class="all-bags">
      <router-link to="collection"><img src="../../assets/collection.jpg"/></router-link>
    </div>
  </div>
</template>

<script>
  import Highlight from "../product/Highlight";
  import { mapState } from "vuex";

  export default {
    name: "Home",
    components: { Highlight },
    data() {
      return {
        loading: true,
      };
    },
    created() {
      this.$store.dispatch("products/getAllProducts").then(() => {
        this.loading = false;
      });
    },
    computed: {
      ...mapState({
        products: state => state.products.all,
        highlights: state => state.products.highlights,
      }),
    },
    methods: {
      getImgUrl(img) {
        return require("../../assets/pictures/bags/" + img);
      },
    },
  };
</script>

<style scoped>
  .home {
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  .all-bags {
    width: 40%;
    height: 25%;
    transition: all .1s ease;
  }
  .all-bags:hover {
    transform: scale(1.03);
  }
  a img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }
</style>
