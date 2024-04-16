import { cn } from '../../lib/utils'

interface TagProps {
  children: React.ReactNode
}

interface TagIconProps {
  className?: string
  children: React.ReactElement<SVGElement>
}

export function Tag({ children }: TagProps) {
  return (
    <li className="flex items-center gap-3 font-roboto text-base leading-snug text-base-text">
      {children}
    </li>
  )
}

export function TagIcon({ className, children }: TagIconProps) {
  return (
    <span
      className={cn('flex rounded-full bg-red-900 p-2 text-white', className)}
    >
      {children}
    </span>
  )
}
