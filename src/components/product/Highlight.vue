<template>
  <div class="highlight">
    <div class="highlight-image">
      <img :src="getImgUrl(highlights[0].img)" />
    </div>
    <div class="highlight-text">
      <div class="highlight-top">
        <div class="highlight-name">
          <h2>{{ highlights[0].name }}</h2>
          <p>by {{ highlights[0].brand }}</p>
        </div>
        <div class="highlight-price">
          <h2>{{ highlights[0].price.toLocaleString() }} VND</h2>
        </div>
      </div>
      <div class="highlight-desription">
        {{ highlights[0].highlightDescription }}
      </div>
      <div class="highlight-button">
        <Button name="Add to cart!" click="add" :products="highlights[0]" />
      </div>
    </div>
  </div>
</template> 

<script>
  import Button from "../page-assets/Button";

  export default {
    components: { Button },
    props: {
      highlights: [Array, Object],
    },
    methods: {
      getImgUrl(img) {
        return require("../../assets/pictures/bags/" + img);
      },
    },
  };
</script>

<style scoped>
  .highlight {
    width: 80%;
    height: 50%;
    display: flex;
    align-items: center;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  .highlight-image {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .highlight-image img {
    max-width: 100%;
    max-height: 80%;
    width: auto;
    height: auto;
  }
  .highlight-text {
    width: 50%;
    height: 80%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .highlight-top {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .highlight-name {
    width: 60%;
  }
  .highlight-price {
    color: #5fa8d3;
    text-shadow: 1px 1px 2px black;
    width: 30%;
  }

  @media only screen and (max-width: 600px) {
    .highlight {
      height: 80%;
      width: 100%;
      flex-direction: column;
      justify-content: space-around;    
    }
    .highlight-image {
      width: 100%;
      height: 40%;
    }
    .highlight-image img {
      max-height: 100%;
    }
    .highlight-text {
      width: 100%;
      height: 55%;
    }
  }
</style>
