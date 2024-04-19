import { ComponentProps, useId } from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends ComponentProps<'input'> {
  className?: string
  placeholder: string
}

export function Input({ placeholder, className, ...props }: InputProps) {
  const id = useId()
  return (
    <label
      className={cn(
        'flex items-center rounded-[4px] border border-solid border-base-button bg-base-input p-3 text-sm text-base-text placeholder:text-base-label  focus-within:border-brand-dark',
        className,
      )}
      htmlFor={id}
    >
      <span className="sr-only">{placeholder}</span>
      <input
        className="peer w-full bg-transparent focus:outline-none"
        id={id}
        placeholder={placeholder}
        type="text"
        {...props}
      />
      <span className="text-xs italic text-base-label peer-required:hidden">
        Opcional
      </span>
    </label>
  )
}
