import blue from "../../images/boba_blue.png";
import brown from "../../images/boba_brown.png";
import cyan from "../../images/boba_cyan.png";
import green from "../../images/boba_green.png";
import matcha from "../../images/boba_matcha.png";
import pink from "../../images/boba_pink.png";
import purple from "../../images/boba_purple.png";
import red from "../../images/boba_red.png";
import yellow from "../../images/boba_yellow.png";
import cake from "../../images/cake.png";
import cupcake from "../../images/cupcake.png";
import macaron from "../../images/macaron.png";

const products = {
  cardData: [
    { id: 1, img: green, title: "Avocado", price: 5.5 },
    { id: 2, img: blue, title: "Blueberry", price: 5.5 },
    { id: 3, img: purple, title: "Grape", price: 5.5 },
    { id: 4, img: cyan, title: "Hawaiian", price: 5.5 },
    { id: 5, img: pink, title: "Hibiscus", price: 5.5 },
    { id: 6, img: yellow, title: "Jackfruit", price: 5.5 },
    { id: 7, img: matcha, title: "Matcha", price: 5.5 },
    { id: 8, img: brown, title: "Milk Tea", price: 5.5 },
    { id: 9, img: red, title: "Strawberry", price: 5.5 },
    { id: 10, img: cake, title: "Cake", price: 3.5 },
    { id: 11, img: cupcake, title: "Cupcake", price: 2.0 },
    { id: 12, img: macaron, title: "Macaron", price: 3.0 },
  ],
  cart: [],
  currentItem: null,
};

export default products;
