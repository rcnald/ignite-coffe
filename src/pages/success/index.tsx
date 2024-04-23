import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Tag, TagIcon } from '../../components/tag'
import { CartContext } from '../../contexts/CartContext'

enum PaymentMethods {
  debit = 'Cartão de débito',
  credit = 'Cartão de crédito',
  cash = 'Dinheiro',
}

export function Success() {
  const { id } = useParams<{ id: string }>()
  const { orders } = useContext(CartContext)

  const order = orders.find((order) => String(order.id) === id)
  return (
    <div>
      <main className="flex flex-col gap-10">
        <span>
          <h1 className="font-baloo text-[32px] font-extrabold text-brand-dark">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </span>
        <div className="flex  justify-between">
          <div className="flex w-full max-w-[526px] rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-gradient-to-r from-brand-default to-accent-default p-[1px]">
            <ul className="flex flex-1 flex-col gap-8 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-background p-10 ">
              <Tag>
                <TagIcon className="bg-accent-default">
                  <MapPin size={16} weight="fill" />
                </TagIcon>
                <span>
                  Entrega em{' '}
                  <strong>
                    {order ? order.street : 'Rua'},{' '}
                    {order ? order.number : 'Número'}
                  </strong>{' '}
                  <br />
                  {order ? order.neighborhood : 'Bairro'}&nbsp;-&nbsp;
                  {order ? order.city : 'Cidade'}, {order ? order.state : 'UF'}
                </span>
              </Tag>
              <Tag>
                <TagIcon className="bg-brand-default">
                  <Timer size={16} weight="fill" />
                </TagIcon>
                <span>
                  Previsão de entrega
                  <br /> <strong>20 min - 30 min</strong>
                </span>
              </Tag>
              <Tag>
                <TagIcon className="bg-brand-dark">
                  <CurrencyDollar size={16} weight="fill" />
                </TagIcon>
                <span>
                  Pagamento na entrega
                  <br />{' '}
                  <strong>
                    {order
                      ? PaymentMethods[order.paymentMethod]
                      : 'Não Informado'}
                  </strong>
                </span>
              </Tag>
            </ul>
          </div>
          <img
            src="/delivery.png"
            alt="Homem fazendo entrega em uma motocicleta"
          />
        </div>
      </main>
    </div>
  )
}
