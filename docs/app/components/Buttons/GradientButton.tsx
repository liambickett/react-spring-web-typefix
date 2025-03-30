import clsx from 'clsx'
import type { ReactNode, JSX } from 'react'
import { button, inner } from './GradientButton.css'

interface GradientButtonProps {
  children: ReactNode
  href?: string
  tag?: keyof JSX.IntrinsicElements
  className?: string
  variant?: 'regular' | 'small'
  type?: 'button' | 'submit'
}

export const GradientButton = ({
  className,
  href,
  children,
  tag = 'a',
  variant = 'regular',
  type = 'button',
  ...props
}: GradientButtonProps) => {
  const Element = tag

  return (
    <Element
      className={clsx(button({ size: variant }), className)}
      href={href}
      // @ts-expect-error – polymorphic component
      type={tag === 'button' ? type : undefined}
      {...props}
    >
      <span className={inner({ size: variant })}>{children}</span>
    </Element>
  )
}
