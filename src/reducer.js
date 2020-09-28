//lo importas a index.js

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
 // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //LOGIC for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      //LOGIC for remoVing item to basket..
      // we clone the basket
      let newBasket = [...state.basket];

      //We check the index
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exist in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it's not in your basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      //si no e snada de lo anterior retorna el estado
      return state;
  }
};

export default reducer;
