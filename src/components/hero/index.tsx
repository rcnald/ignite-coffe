import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import heroImage from '../../assets/hero-image.png'
import { Tag, TagIcon } from '../../components/tag'

export function Hero() {
  return (
    <section className="flex gap-14 py-24">
      <div className="flex flex-col gap-16">
        <span className="flex flex-col gap-4">
          <h1 className="font-baloo text-5xl font-extrabold leading-snug">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="font-roboto text-xl leading-snug text-base-text">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </span>
        <ul className="grid grid-cols-[repeat(2,auto)] gap-x-10 gap-y-5">
          <Tag>
            <TagIcon className="bg-brand-dark">
              <ShoppingCart size={16} weight="fill" />
            </TagIcon>
            Compra simples e segura
          </Tag>
          <Tag>
            <TagIcon className="bg-base-text">
              <Package size={16} weight="fill" />
            </TagIcon>
            Embalagem mantém o café intacto
          </Tag>
          <Tag>
            <TagIcon className="bg-brand-default">
              <Timer size={16} weight="fill" />
            </TagIcon>
            Entrega rápida e rastreada
          </Tag>
          <Tag>
            <TagIcon className="bg-accent-default">
              <Coffee size={16} weight="fill" />
            </TagIcon>
            O café chega fresquinho até você
          </Tag>
        </ul>
      </div>
      <img src={heroImage} alt="" />
    </section>
  )
}
