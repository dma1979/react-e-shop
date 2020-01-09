import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state, //everything else on the state
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state, //everything else on the state
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state, //everything else on the state
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
