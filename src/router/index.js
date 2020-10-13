import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home";
import Cart from "../components/cart/Cart";
import Collection from "../components/pages/Collection";

const routes = [
  { path: "Vue-Ecommerce/", component: Home, name: "Home" },
  { path: "Vue-Ecommerce/cart", component: Cart, name: "Your Shopping Cart" },
  { path: "Vue-Ecommerce/collection", component: Collection, name: "Collection" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
