import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
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
  ], // {id, img, title, price}
  cart: [], // {id, img, title, price, qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the items data from teh products array
      const item = state.products.find((product) => product.id === action.payload.id);
      // Check if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
