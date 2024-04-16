import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/complete-logo.svg'

export function Header() {
  return (
    <header className="flex justify-between py-8">
      <img
        src={logo}
        alt="Copo de café roxo, ao lado da escrita 'Coffee Delivery'"
      />
      <div className="flex gap-3">
        <span className="flex w-fit gap-1 rounded-md bg-accent-light p-2 text-accent-dark">
          <MapPin className="text-accent-default" size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <button className="rounded-md bg-brand-light p-2">
          <ShoppingCart className="text-brand-dark" size={22} weight="fill" />
        </button>
      </div>
    </header>
  )
}
