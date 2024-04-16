import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffeeImage from '../../assets/coffee.png'

export function Card() {
  return (
    <article className="relative grid w-fit max-w-[256px] grid-rows-[20px_1fr] place-items-center gap-3 p-6 before:absolute before:-z-10 before:row-start-2 before:h-full before:w-full before:rounded-md before:rounded-bl-[36px] before:rounded-tr-[36px] before:bg-base-card before:content-['']">
      <img className="row-span-2" src={coffeeImage} alt="" />
      <ul className="flex flex-wrap gap-1">
        <li className="rounded-full bg-brand-light px-2 py-1 text-[0.625rem] font-bold uppercase leading-snug text-brand-dark ">
          Tradicional
        </li>
      </ul>
      <h1 className="font-baloo text-xl font-bold">Expresso Tradicional</h1>
      <p className="text-center text-sm text-base-label">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex w-full justify-between gap-2">
        <span className="self-center whitespace-nowrap font-baloo text-2xl font-extrabold before:font-roboto before:text-sm before:font-normal before:text-base-text before:content-['R$_']">
          9,90
        </span>
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-3 place-items-center items-center rounded-md bg-base-button p-[8.5px]">
            <button className="text-accent-default">
              <Minus size={16} />
            </button>
            <span className="grid h-5 place-content-center text-base text-base-title">
              1
            </span>
            <button className="text-accent-default">
              <Plus size={16} />
            </button>
          </div>
          <button className="rounded-md bg-accent-dark p-2">
            <ShoppingCart className="text-white" size={22} weight="fill" />
          </button>
        </div>
      </div>
    </article>
  )
}
