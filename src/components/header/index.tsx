import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/complete-logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { cn } from '../../lib/utils'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <header className="flex justify-between py-8">
      <Link to={'/'}>
        <img
          src={logo}
          alt="Copo de café roxo, ao lado da escrita 'Coffee Delivery'"
        />
      </Link>
      <div className="flex gap-3">
        <span className="flex w-fit gap-1 rounded-md bg-accent-light p-2 text-accent-dark">
          <MapPin className="text-accent-default" size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <Link
          to={'/checkout'}
          data-amount={cart.length ? cart.length : 0}
          className={cn(
            'relative rounded-md bg-brand-light p-2 after:absolute after:-right-[8px] after:-top-[8px] after:flex after:size-5 after:items-center after:justify-center after:rounded-full after:bg-brand-dark after:text-xs after:font-bold after:text-base-white after:content-[attr(data-amount)]',
            { 'after:hidden': cart.length <= 0 },
          )}
        >
          <ShoppingCart className="text-brand-dark" size={22} weight="fill" />
        </Link>
      </div>
    </header>
  )
}
