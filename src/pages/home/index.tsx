import { Card } from '../../components/card'
import { Hero } from '../../components/hero'

export function Home() {
  return (
    <div>
      <Hero />
      <section className="font-roboto">
        <h1 className="font-baloo text-[2rem] font-extrabold">Nossos cafés</h1>
        <div className="grid gap-x-8 gap-y-5">
          <Card />
        </div>
      </section>
    </div>
  )
}
