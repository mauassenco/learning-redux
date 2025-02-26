import CartActionTypes from "./action-types"

const initialState = {
  products: [],
  productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsALreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )
      if (productIsALreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        }
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      }

    case CartActionTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      }

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      }

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      }

    default:
      return state
  }
}

export default cartReducer
