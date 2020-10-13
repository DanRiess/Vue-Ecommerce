<template>
  <div class="checkout-form">
    <div class="checkout-form-heading">
      <h3>Your Information</h3>
    </div>
    <div class="form">
      <input type="text" name="name" autocomplete="off" v-model="name" required />
      <label for="name" class="label">
        <span class="content">Name</span>
      </label>
    </div>
    <div class="form">
      <input type="text" name="address" autocomplete="off" v-model="address" required />
      <label for="address" class="label">
        <span class="content">Address</span>
      </label>
    </div>
    <div class="form">
      <input type="text" name="phone" autocomplete="off" v-model="phone" required />
      <label for="phone" class="label">
        <span class="content">Phone</span>
      </label>
    </div>
    <div class="form">
      <input type="text" name="email" autocomplete="off" v-model="email" required />
      <label for="email" class="label">
        <span class="content">E-Mail</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckoutForm",
    data() {
      return {
        name: "",
        address: "",
        phone: "",
        email: "",
      };
    },
  };
</script>

<style scoped>
  h3 {
    font-size: 1.5rem;
    color: #5fa8d3;
  }
  .checkout-form-heading {
    width: 90%;
    display: flex;
    justify-content: flex-start;
  }
  .checkout-form {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
  }
  .form {
    width: 90%;
    position: relative;
    height: 50px;
    overflow: hidden;
  }
  .form input {
    width: 100%;
    height: 100%;
    color: white;
    background: transparent;
    padding-top: 1rem;
    border: none;
    outline: none;
  }
  .form label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid white;
    color: white;
  }
  .form label::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #5fa8d3;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  .content {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.3s ease;
  }
  .form input:focus + .label .content,
  .form input:valid + .label .content {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }
  .form input:focus + .label::after,
  .form input:valid + .label::after {
    transform: translateX(0%);
  }
</style>
