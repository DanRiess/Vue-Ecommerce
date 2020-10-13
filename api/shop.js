const _products = [
  {
    id: 1,
    name: "Black Leather Bag",
    price: 500000,
    brand: "Givenchy",
    material: "Leather",
    description: "You can carry stuff with it. So cool!",
    highlight: false,
    highlightDescription: "Great leather bag from Givenchy blablabla",
    img: "leather_black_id1000_1.jpg",
    stock: 1,
  },
  {
    id: 2,
    name: "Brown Leather Bag",
    price: 400000,
    brand: "Bullcaptain",
    material: "Leather",
    description: "You can carry stuff with it. So cool!",
    highlight: true,
    highlightDescription: "Incredible design. 100% pure leather. From a real cow! Get yours today!",
    img: "leather_brown_id1_1.jpg",
    stock: 1,
  },
  {
    id: 3,
    name: "Black Leather Bag",
    price: 700000,
    brand: "Faralvi",
    material: "Leather",
    description: "You can carry stuff with it. So cool!",
    highlight: false,
    highlightDescription: "Incredible design. 100% pure leather. From a real cow! Get yours today!",
    img: "leather_black_id1001_1.jpg",
    stock: 1,
  },
  {
    id: 4,
    name: "Red Leather Bag",
    price: 450000,
    brand: "Rediera",
    material: "Leather",
    description: "You can carry stuff with it. So cool!",
    highlight: false,
    highlightDescription: "Incredible design. 100% pure leather. From a real cow! Get yours today!",
    img: "leather_red_id2000_1.jpg",
    stock: 1,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 1000);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    }, 100);
  },
};
