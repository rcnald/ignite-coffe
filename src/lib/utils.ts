import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function centsToPrice(value: number) {
  return (value / 100)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .split('$')[1]
}
