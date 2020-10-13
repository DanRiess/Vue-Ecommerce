import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home";
import Cart from "../components/cart/Cart";
import Collection from "../components/pages/Collection";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/cart", component: Cart, name: "Your Shopping Cart" },
  { path: "/collection", component: Collection, name: "Collection" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
