import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import { CartContext } from '../../contexts/CartContext'
import { centsToPrice } from '../../lib/utils'

interface CardProps extends PropsWithChildren {
  id: number
}

interface CardImageProps extends ComponentProps<'img'> {
  src: string
  alt: string
}

type CardTagProps = PropsWithChildren<ComponentProps<'li'>>

interface CardTagsProps extends ComponentProps<'ul'> {
  children:
    | React.ReactElement<CardTagProps>
    | React.ReactElement<CardTagProps>[]
}

interface CardTitleProps extends ComponentProps<'h1'> {}

interface CardDescriptionProps extends ComponentProps<'p'> {}

interface CardDetailsProps extends PropsWithChildren<ComponentProps<'div'>> {}

interface CardPriceProps extends ComponentProps<'span'> {
  value: number
}

interface CardContextType {
  id: number
  amount: number
  handleDecreaseAmount: () => void
  handleIncreaseAmount: () => void
}

const CardContext = createContext({} as CardContextType)

export function Card({ id, children }: CardProps) {
  const [amount, setAmount] = useState(1)

  const handleDecreaseAmount = () => {
    if (amount > 1) setAmount((prev) => prev - 1)
  }

  const handleIncreaseAmount = () => {
    setAmount((prev) => prev + 1)
  }

  return (
    <CardContext.Provider
      value={{ handleDecreaseAmount, handleIncreaseAmount, amount, id }}
    >
      <article className="relative grid w-fit max-w-[256px] grid-rows-[20px_1fr] place-items-center gap-3 p-6 before:absolute before:-z-10 before:row-start-2 before:h-full before:w-full before:rounded-md before:rounded-bl-[36px] before:rounded-tr-[36px] before:bg-base-card before:content-['']">
        {children}
      </article>
    </CardContext.Provider>
  )
}

export function CardImage({ src, alt, ...props }: CardImageProps) {
  return <img className="row-span-2" src={src} alt={alt} {...props} />
}

export function CardTags({ children }: CardTagsProps) {
  return <ul className="flex flex-wrap justify-center gap-1">{children}</ul>
}

export function CardTag({ children }: CardTagProps) {
  return (
    <li className="rounded-full bg-brand-light px-2 py-1 text-[0.625rem] font-bold uppercase leading-snug text-brand-dark ">
      {children}
    </li>
  )
}

export function CardTitle({ children }: CardTitleProps) {
  return <h1 className="font-baloo text-xl font-bold">{children}</h1>
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <p className="text-center text-sm text-base-label">{children}</p>
}

export function CardPrice({ value }: CardPriceProps) {
  return (
    <span className="self-center whitespace-nowrap font-baloo text-2xl font-extrabold before:font-roboto before:text-sm before:font-normal before:text-base-text before:content-['R$']">
      {centsToPrice(value)}
    </span>
  )
}

export function CardDetails({ children }: CardDetailsProps) {
  return <div className="flex w-full justify-between gap-2">{children}</div>
}

export function CardControls() {
  const { handleIncreaseAmount, handleDecreaseAmount, amount, id } =
    useContext(CardContext)
  const { handleAddCoffeeToCart } = useContext(CartContext)
  return (
    <div className="flex items-center gap-2">
      <div className="grid grid-cols-3 place-items-center items-center rounded-md bg-base-button p-[8.5px]">
        <button className="text-accent-default" onClick={handleDecreaseAmount}>
          <Minus size={16} />
        </button>
        <span className="grid h-5 place-content-center text-base text-base-title">
          {amount}
        </span>
        <button className="text-accent-default" onClick={handleIncreaseAmount}>
          <Plus size={16} />
        </button>
      </div>
      <button
        className="rounded-md bg-accent-dark p-2"
        onClick={() => handleAddCoffeeToCart(id, amount)}
      >
        <ShoppingCart className="text-white" size={22} weight="fill" />
      </button>
    </div>
  )
}
