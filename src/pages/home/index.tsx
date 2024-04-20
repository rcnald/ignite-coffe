import {
  Card,
  CardControls,
  CardDescription,
  CardDetails,
  CardImage,
  CardPrice,
  CardTag,
  CardTags,
  CardTitle,
} from '../../components/card'
import { Hero } from '../../components/hero'
import { CartContextProvider } from '../../contexts/CartContext'
import { coffees } from '../../lib/data'

export function Home() {
  return (
    <div>
      <Hero />
      <section className="font-roboto">
        <h1 className="font-baloo text-[2rem] font-extrabold">Nossos cafés</h1>
        <CartContextProvider>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,0fr))] gap-x-8 gap-y-5">
            {coffees.map((coffee) => {
              return (
                <Card key={coffee.id} id={coffee.id}>
                  <CardImage src={coffee.image} alt="" />
                  <CardTags>
                    {coffee.tags.map((tag) => {
                      return <CardTag key={tag.id}>{tag.name}</CardTag>
                    })}
                  </CardTags>
                  <CardTitle>{coffee.title}</CardTitle>
                  <CardDescription>{coffee.description}</CardDescription>
                  <CardDetails>
                    <CardPrice value={coffee.price} />
                    <CardControls />
                  </CardDetails>
                </Card>
              )
            })}
          </div>
        </CartContextProvider>
      </section>
    </div>
  )
}
