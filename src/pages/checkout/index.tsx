import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { Input } from '../../components/input'
import { Select, SelectIcon } from '../../components/select'

export function Checkout() {
  return (
    <div className="flex gap-8 font-roboto">
      <section className="flex w-full max-w-[640px] flex-col gap-4">
        <h1 className="font-baloo text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h1>
        <form className="flex flex-col gap-3">
          <fieldset className="flex flex-col gap-8 rounded-md bg-base-card p-10 ">
            <div className="flex gap-2">
              <MapPinLine className="text-brand-dark" size={22} />
              <span>
                <h2 className="text-base text-base-subtitle">
                  Endereço de Entrega
                </h2>
                <p className="text-sm text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </span>
            </div>
            <div className="grid grid-cols-[200px_1fr_60px] gap-3">
              <Input placeholder="CEP" required />
              <Input
                className="col-span-full row-start-2"
                placeholder="Rua"
                required
              />
              <Input className="row-start-3" placeholder="Número" required />
              <Input
                className="col-span-2 row-start-3"
                placeholder="Complemento"
              />
              <Input className="row-start-4" placeholder="Bairro" required />
              <Input className="row-start-4" placeholder="Cidade" required />
              <Input className="row-start-4" placeholder="UF" required />
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-8 rounded-md bg-base-card p-10 ">
            <div className="flex gap-2">
              <CurrencyDollar className="text-accent-default" size={22} />
              <span>
                <h2 className="text-base text-base-subtitle">Pagamento</h2>
                <p className="text-sm text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </div>
            <div className="flex gap-3">
              <Select name="d" value="credit">
                <SelectIcon icon={CreditCard} />
                Cartão de crédito
              </Select>
              <Select name="d" value="debit">
                <SelectIcon icon={Bank} />
                cartão de débito
              </Select>
              <Select name="d" value="cash">
                <SelectIcon icon={Money} />
                dinheiro
              </Select>
            </div>
          </fieldset>
        </form>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="font-baloo text-lg font-bold text-base-subtitle">
          Cafés selecionados
        </h1>
        <div className="flex flex-col gap-6 rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-card p-10">
          <ul className="flex flex-col gap-6">
            <li className="flex gap-5 border-b border-solid border-base-button pb-6">
              <img className="size-16" src="./coffee.png" alt="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-base text-base-subtitle">
                  Expresso Tradicional
                </h2>
                <div className="flex gap-2">
                  <div className="grid h-fit shrink-0 grid-cols-3 place-items-center items-center rounded-md bg-base-button p-[5.5px]">
                    <button className="text-accent-default">
                      <Minus size={16} />
                    </button>
                    <span className="grid size-5 place-content-center text-base text-base-title">
                      {1}
                    </span>
                    <button className="text-accent-default">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button className="flex h-fit items-center rounded-md bg-base-button p-2 text-xs uppercase text-base-text">
                    <Trash className="text-accent-default" size={16} />
                    Remover
                  </button>
                </div>
              </div>
              <span className="text-base font-bold text-base-text before:content-['R$_']">
                9,90
              </span>
            </li>
            <li className="flex gap-5 border-b border-solid border-base-button pb-6">
              <img className="size-16" src="./coffee.png" alt="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-base text-base-subtitle">
                  Expresso Tradicional
                </h2>
                <div className="flex gap-2">
                  <div className="grid h-fit shrink-0 grid-cols-3 place-items-center items-center rounded-md bg-base-button p-[5.5px]">
                    <button className="text-accent-default">
                      <Minus size={16} />
                    </button>
                    <span className="grid size-5 place-content-center text-base text-base-title">
                      {1}
                    </span>
                    <button className="text-accent-default">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button className="flex h-fit items-center rounded-md bg-base-button p-2 text-xs uppercase text-base-text">
                    <Trash className="text-accent-default" size={16} />
                    Remover
                  </button>
                </div>
              </div>
              <span className="text-base font-bold text-base-text before:content-['R$_']">
                9,90
              </span>
            </li>
          </ul>
          <table className="flex w-full flex-col gap-3  ">
            <tr className="flex justify-between">
              <td className="text-sm text-base-text">Total de itens</td>
              <td className="text-base text-base-text before:content-['R$_']">
                29,70
              </td>
            </tr>
            <tr className="flex justify-between">
              <td className="text-sm text-base-text">Entrega</td>
              <td className="text-base text-base-text before:content-['R$_']">
                3,50
              </td>
            </tr>
            <tr className="flex justify-between">
              <td className="text-xl font-bold text-base-text">Total</td>
              <td className="text-xl font-bold text-base-text before:content-['R$_']">
                29,70
              </td>
            </tr>
          </table>
          <button className="rounded-md bg-brand-default p-3 font-bold uppercase leading-relaxed text-white">
            confirmar pedido
          </button>
        </div>
      </section>
    </div>
  )
}
