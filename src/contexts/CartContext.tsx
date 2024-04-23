import { PropsWithChildren, createContext, useEffect, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  createNewOrderAction,
  decreaseCartCoffeeAction,
  increaseCartCoffeeAction,
  removeCoffeeFromCartAction,
  resetCartAction,
} from '../reducers/cart/actions'
import {
  CartCoffeeAddFunction,
  CartCoffeeFunction,
  CartItemData,
  OrderData,
  OrderFunction,
  cartReducer,
} from '../reducers/cart/reducer'

interface CartContextType {
  cart: CartItemData[]
  orders: OrderData[]
  addCoffeeToCart: CartCoffeeAddFunction
  removeCoffeeFromCart: CartCoffeeFunction
  increaseCartCoffee: CartCoffeeFunction
  decreaseCartCoffee: CartCoffeeFunction
  createNewOrder: OrderFunction
  resetCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [], orders: [] },
    (initialState) => {
      const cartAsString = localStorage.getItem(
        '@ignite-coffee:cartState-1.0.0',
      )

      if (cartAsString) {
        return JSON.parse(cartAsString)
      }

      return initialState
    },
  )

  const { cart, orders } = cartState

  const addCoffeeToCart: CartCoffeeAddFunction = (id, amount) => {
    dispatch(addCoffeeToCartAction(id, amount))
  }

  const removeCoffeeFromCart: CartCoffeeFunction = (id) => {
    dispatch(removeCoffeeFromCartAction(id))
  }

  const increaseCartCoffee: CartCoffeeFunction = (id) => {
    dispatch(increaseCartCoffeeAction(id))
  }

  const decreaseCartCoffee: CartCoffeeFunction = (id) => {
    dispatch(decreaseCartCoffeeAction(id))
  }

  const createNewOrder: OrderFunction = (shoppingInfo, coffees, callback) => {
    dispatch(createNewOrderAction(shoppingInfo, coffees, callback))
  }

  const resetCart = () => {
    dispatch(resetCartAction())
  }

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee:cartState-1.0.0',
      JSON.stringify(cartState),
    )
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        decreaseCartCoffee,
        increaseCartCoffee,
        createNewOrder,
        resetCart,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
