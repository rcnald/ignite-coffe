import { Minus, Plus, Trash } from 'phosphor-react'
import { PropsWithChildren, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { coffees } from '../../lib/data'
import { centsToPrice, cn } from '../../lib/utils'

interface CoffeeData {
  id: number
  name: string
  image: string
  price: number
  amount: number
}

interface CartSummaryProps extends PropsWithChildren {
  className?: string
}

interface CartItemProps {
  id: number
  coffee: CoffeeData
}

interface CartSummarySubmitProps {
  form: string
}

interface CartSummaryContextType {
  cartCoffees: CoffeeData[]
  totalCartCoffeesPrice: number
  shippingPrice: number
}

const CartSummaryContext = createContext({} as CartSummaryContextType)

export function CartSummary({ className, children }: CartSummaryProps) {
  const { cart } = useContext(CartContext)

  const cartCoffees = cart.map((cartCoffee) => {
    const coffee = coffees.find((coffee) => coffee.id === cartCoffee.coffeeId)
    if (coffee) {
      return {
        id: coffee.id,
        name: coffee.title,
        price: coffee.price,
        image: coffee.image,
        amount: cartCoffee.amount,
      }
    }
    return {} as CoffeeData
  })

  const shippingPrice = 350

  const totalCartCoffeesPrice = cartCoffees.reduce((amount, coffee) => {
    return amount + coffee.price * coffee.amount
  }, 0)

  return (
    <div
      className={cn(
        'flex w-full flex-col gap-6 rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-card p-10',
        className,
      )}
    >
      <CartSummaryContext.Provider
        value={{ cartCoffees, totalCartCoffeesPrice, shippingPrice }}
      >
        {children}
      </CartSummaryContext.Provider>
    </div>
  )
}

export function CartSummaryList() {
  const { cartCoffees } = useContext(CartSummaryContext)

  return (
    <ul className="flex flex-col gap-6 *:border-b *:border-solid *:pb-6">
      {cartCoffees.length ? (
        cartCoffees.map((coffee) => {
          return (
            <CartSummaryItem key={coffee.id} id={coffee.id} coffee={coffee} />
          )
        })
      ) : (
        <li className="text-center font-bold text-base-text ">
          <Link to={'/'} className="hover:underline">
            Nenhum item no carrinho
          </Link>
        </li>
      )}
    </ul>
  )
}

function CartSummaryItem({ id, coffee }: CartItemProps) {
  const { removeCoffeeFromCart, decreaseCartCoffee, increaseCartCoffee } =
    useContext(CartContext)
  return (
    <li className="flex gap-5 border-b border-solid border-base-button">
      <img className="size-16" src={coffee.image} alt={coffee.name} />
      <div className="flex flex-col gap-2">
        <h2 className="text-base text-base-subtitle">{coffee.name}</h2>
        <div className="flex gap-2">
          <div className="grid h-fit shrink-0 grid-cols-3 place-items-center items-center rounded-md bg-base-button p-[5.5px]">
            <button
              className="text-accent-default"
              onClick={() => decreaseCartCoffee(id)}
            >
              <Minus size={16} />
            </button>
            <span className="grid size-5 place-content-center text-base text-base-title">
              {coffee.amount}
            </span>
            <button
              className="text-accent-default"
              onClick={() => increaseCartCoffee(id)}
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            className="flex h-fit items-center rounded-md bg-base-button p-2 text-xs uppercase text-base-text"
            onClick={() => removeCoffeeFromCart(id)}
          >
            <Trash className="text-accent-default" size={16} />
            Remover
          </button>
        </div>
      </div>
      <span className="text-base font-bold text-base-text before:content-['R$']">
        {centsToPrice(coffee.price)}
      </span>
    </li>
  )
}

export function CartSummaryPrices() {
  const { totalCartCoffeesPrice, shippingPrice } =
    useContext(CartSummaryContext)

  const totalCart = totalCartCoffeesPrice + shippingPrice

  return (
    <table className="flex w-full flex-col gap-3  ">
      <tbody>
        <tr className="flex justify-between">
          <td className="text-sm text-base-text">Total de itens</td>
          <td className="text-base text-base-text before:content-['R$']">
            {centsToPrice(totalCartCoffeesPrice)}
          </td>
        </tr>
        <tr className="flex justify-between">
          <td className="text-sm text-base-text">Entrega</td>
          <td className="text-base text-base-text before:content-['R$']">
            {centsToPrice(shippingPrice)}
          </td>
        </tr>
        <tr className="flex justify-between">
          <td className="text-xl font-bold text-base-text">Total</td>
          <td className="text-xl font-bold text-base-text before:content-['R$_']">
            {centsToPrice(totalCart)}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export function CartSummarySubmit({ form }: CartSummarySubmitProps) {
  const { cart } = useContext(CartContext)

  const cartHasItems = !!cart.length

  return (
    <button
      className="rounded-md bg-brand-default p-3 font-bold uppercase leading-relaxed text-white transition-all disabled:bg-brand-dark disabled:text-base-hover"
      form={form}
      title={
        cartHasItems ? 'Finalizar' : 'Tenha pelo menos um item no carrinho'
      }
      disabled={!cartHasItems}
    >
      confirmar pedido
    </button>
  )
}
