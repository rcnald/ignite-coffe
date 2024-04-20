import { CartSummary } from '../../components/cartSummary'
import { OrderForm } from '../../components/orderForm'
import { CartContextProvider } from '../../contexts/CartContext'

export function Cart() {
  return (
    <div className="flex gap-8 font-roboto">
      <section className="flex w-full max-w-[640px] flex-col gap-4">
        <h1 className="font-baloo text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h1>
        <OrderForm />
      </section>
      <section className="flex w-full max-w-[448px] flex-col gap-4">
        <h1 className="font-baloo text-lg font-bold text-base-subtitle">
          Cafés selecionados
        </h1>
        <CartContextProvider>
          <CartSummary />
        </CartContextProvider>
      </section>
    </div>
  )
}
