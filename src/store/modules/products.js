import shop from "../../../api/shop";

// initial state
const state = () => ({
  all: [],
  highlights: [],
});

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setProducts", products);
      const highlights = products.filter(product => product.highlight);
      commit("setHighlights", highlights);
    });
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  setHighlights(state, highlights) {
    state.highlights = highlights;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.stock--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
