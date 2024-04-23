import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import {
  CartSummary,
  CartSummaryList,
  CartSummaryPrices,
  CartSummarySubmit,
} from '../../components/cartSummary'
import { OrderForm } from '../../components/orderForm'
import { CartContext } from '../../contexts/CartContext'

const OrderFormValidationSchema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/, 'Informe um CEP em formato valido'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe um número'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Informe um bairro'),
  city: z.string().min(1, 'Informe uma cidade'),
  state: z.string().min(2, 'Informe uma cidade').max(2),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderFormData = z.infer<typeof OrderFormValidationSchema>

export function Cart() {
  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      state: '',
      street: '',
    },
  })
  const navigate = useNavigate()
  const { createNewOrder, resetCart, cart } = useContext(CartContext)

  const handleOrderSubmit = (data: OrderFormData) => {
    createNewOrder(data, cart, navigate)
    resetCart()
  }

  const { handleSubmit } = orderForm

  return (
    <div className="flex gap-8 font-roboto">
      <section className="flex w-full max-w-[640px] flex-col gap-4">
        <h1 className="font-baloo text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h1>
        <form
          className="flex flex-col gap-3"
          id="orderForm"
          onSubmit={handleSubmit(handleOrderSubmit)}
        >
          <FormProvider {...orderForm}>
            <OrderForm />
          </FormProvider>
        </form>
      </section>
      <main className="flex w-full max-w-[448px] flex-col gap-4">
        <h1 className="font-baloo text-lg font-bold text-base-subtitle">
          Cafés selecionados
        </h1>
        <CartSummary>
          <CartSummaryList />
          <CartSummaryPrices />
          <CartSummarySubmit form="orderForm" />
        </CartSummary>
      </main>
    </div>
  )
}
