import { PropsWithChildren, createContext, useEffect, useState } from 'react'

interface CartItemData {
  coffeeId: number
  amount: number
}

interface CartContextType {
  cart: CartItemData[]
  handleAddCoffeeToCart: (id: number, amount: number) => void
  handleRemoveCoffeeFromCart: (id: number) => void
  handleIncreaseCartCoffee: (id: number) => void
  handleDecreaseCartCoffee: (id: number) => void
}

type CartContextProps = PropsWithChildren

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<Array<CartItemData>>(() => {
    const cartAsString = localStorage.getItem('@ignite-coffee:cart-1.0.0')

    if (cartAsString) return JSON.parse(cartAsString)

    return []
  })

  const handleAddCoffeeToCart = (id: number, amount: number) => {
    const coffeeToAddIsAlreadyInCart = cart.find(
      (coffee) => coffee.coffeeId === id,
    )

    if (coffeeToAddIsAlreadyInCart) {
      setCart((prev) =>
        prev.map((coffee) => {
          if (coffee.coffeeId === id) {
            return { ...coffee, amount: coffee.amount + amount }
          }
          return coffee
        }),
      )
    } else {
      setCart((prev) => [...prev, { coffeeId: id, amount }])
    }
  }

  const handleRemoveCoffeeFromCart = (id: number) => {
    setCart((prev) => prev.filter((coffee) => coffee.coffeeId !== id))
  }

  const handleIncreaseCartCoffee = (id: number) => {
    setCart((prev) =>
      prev.map((coffee) => {
        if (coffee.coffeeId === id) {
          return { ...coffee, amount: coffee.amount + 1 }
        }
        return coffee
      }),
    )
  }

  const handleDecreaseCartCoffee = (id: number) => {
    setCart((prev) =>
      prev.map((coffee) => {
        if (coffee.coffeeId === id) {
          const updatedAmount = coffee.amount - 1 < 1 ? 1 : coffee.amount - 1
          return { ...coffee, amount: updatedAmount }
        }
        return coffee
      }),
    )
  }

  useEffect(() => {
    localStorage.setItem('@ignite-coffee:cart-1.0.0', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddCoffeeToCart,
        handleRemoveCoffeeFromCart,
        handleDecreaseCartCoffee,
        handleIncreaseCartCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
