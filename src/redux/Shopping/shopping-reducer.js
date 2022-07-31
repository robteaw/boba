import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [], // {id, img, title, price}
    cart: [], // {id, img, title, price, qty}
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_ITEM_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default: 
            return state;
    }
}

export default shopReducer;