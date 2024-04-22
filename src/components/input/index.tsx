import React, { ComponentProps, useId } from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends ComponentProps<'input'> {
  className?: string
  optional?: boolean
  placeholder: string
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement> & InputProps
>(({ placeholder, optional, className, ...props }, ref) => {
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
        className="w-full bg-transparent focus:outline-none"
        id={id}
        placeholder={placeholder}
        type="text"
        ref={ref}
        {...props}
      />
      <span
        className={cn('hidden text-xs italic text-base-label', {
          inline: optional,
        })}
      >
        Opcional
      </span>
    </label>
  )
})

Input.displayName = 'Input'
