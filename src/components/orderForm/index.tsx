import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { OrderFormData } from '../../pages/cart'
import { Input } from '../input'
import { Select, SelectIcon } from '../select'

interface OrderFormHeaderProps {
  icon: { Element: React.ElementType; classNameColor: string }
  title: string
  description: string
}

export function OrderForm() {
  const { register } = useFormContext<OrderFormData>()

  return (
    <>
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
          <Input placeholder="CEP" {...register('cep')} />
          <Input
            className="col-span-full row-start-2"
            placeholder="Rua"
            {...register('street')}
          />
          <Input
            className="row-start-3"
            placeholder="Número"
            {...register('number')}
          />
          <Input
            className="col-span-2 row-start-3"
            placeholder="Complemento"
            optional
            {...register('complement')}
          />
          <Input
            className="row-start-4"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <Input
            className="row-start-4"
            placeholder="Cidade"
            {...register('city')}
          />
          <Input
            className="row-start-4"
            placeholder="UF"
            {...register('state')}
          />
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
          <Select value="credit" {...register('paymentMethod')}>
            <SelectIcon icon={CreditCard} />
            Cartão de crédito
          </Select>
          <Select value="debit" {...register('paymentMethod')}>
            <SelectIcon icon={Bank} />
            cartão de débito
          </Select>
          <Select value="cash" {...register('paymentMethod')}>
            <SelectIcon icon={Money} />
            dinheiro
          </Select>
        </div>
      </fieldset>
    </>
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
