import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ComponentProps, PropsWithChildren } from 'react'
import { cn } from '../../lib/utils'
import { Input } from '../input'
import { Select, SelectIcon } from '../select'

interface OrderFormProps extends PropsWithChildren<ComponentProps<'form'>> {
  className?: string
}

interface OrderFormHeaderProps {
  icon: { Element: React.ElementType; classNameColor: string }
  title: string
  description: string
}

export function OrderForm({ className }: OrderFormProps) {
  return (
    <form className={cn('flex flex-col gap-3', className)}>
      <fieldset className="flex flex-col gap-8 rounded-md bg-base-card p-10 ">
        <OrderFormHeader
          icon={{
            Element: MapPinLine,
            classNameColor: 'text-brand-dark',
          }}
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />
        <div className="grid grid-cols-[200px_1fr_60px] gap-3">
          <Input placeholder="CEP" required />
          <Input
            className="col-span-full row-start-2"
            placeholder="Rua"
            required
          />
          <Input className="row-start-3" placeholder="Número" required />
          <Input className="col-span-2 row-start-3" placeholder="Complemento" />
          <Input className="row-start-4" placeholder="Bairro" required />
          <Input className="row-start-4" placeholder="Cidade" required />
          <Input className="row-start-4" placeholder="UF" required />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-8 rounded-md bg-base-card p-10 ">
        <OrderFormHeader
          icon={{
            Element: CurrencyDollar,
            classNameColor: 'text-accent-default',
          }}
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
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
  )
}

function OrderFormHeader({
  icon: Icon,
  title,
  description,
}: OrderFormHeaderProps) {
  return (
    <div className="flex gap-2">
      <Icon.Element className={Icon.classNameColor} size={22} />
      <span>
        <h2 className="text-base text-base-subtitle">{title}</h2>
        <p className="text-sm text-base-text">{description}</p>
      </span>
    </div>
  )
}
