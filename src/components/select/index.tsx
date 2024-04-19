import { ComponentProps, useId } from 'react'
import { cn } from '../../lib/utils'

interface SelectIconProps {
  icon: React.ElementType
  className?: string
  size?: number
}

type SelectProps = ComponentProps<'input'>

export function Select({ children, ...props }: SelectProps) {
  const id = useId()
  return (
    <label
      className="flex flex-1 cursor-pointer items-center gap-3 whitespace-nowrap rounded-md border border-solid bg-base-button p-4 text-xs uppercase text-base-text hover:bg-base-hover hover:text-base-subtitle has-[:checked]:border-accent-default has-[:checked]:bg-accent-light has-[:checked]:text-base-text"
      htmlFor={id}
    >
      {children}
      <input className="sr-only" type="radio" id={id} {...props} />
    </label>
  )
}

export function SelectIcon({
  className,
  size = 16,
  icon: Icon,
}: SelectIconProps) {
  return <Icon className={cn('text-accent-default', className)} size={size} />
}
