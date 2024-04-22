import { PropsWithChildren, createContext, useEffect, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  decreaseCartCoffeeAction,
  increaseCartCoffeeAction,
  removeCoffeeFromCartAction,
} from '../reducers/cart/actions'
import { CartItemData, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cart: CartItemData[]
  addCoffeeToCart: (id: number, amount: number) => void
  removeCoffeeFromCart: (id: number) => void
  increaseCartCoffee: (id: number) => void
  decreaseCartCoffee: (id: number) => void
}

type CartContextProps = PropsWithChildren

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], (initialState) => {
    const cartAsString = localStorage.getItem('@ignite-coffee:cart-1.0.0')

    if (cartAsString) return JSON.parse(cartAsString)

    return initialState
  })

  const addCoffeeToCart = (id: number, amount: number) => {
    dispatch(addCoffeeToCartAction(id, amount))
  }

  const removeCoffeeFromCart = (id: number) => {
    dispatch(removeCoffeeFromCartAction(id))
  }

  const increaseCartCoffee = (id: number) => {
    dispatch(increaseCartCoffeeAction(id))
  }

  const decreaseCartCoffee = (id: number) => {
    dispatch(decreaseCartCoffeeAction(id))
  }

  useEffect(() => {
    localStorage.setItem('@ignite-coffee:cart-1.0.0', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        decreaseCartCoffee,
        increaseCartCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
