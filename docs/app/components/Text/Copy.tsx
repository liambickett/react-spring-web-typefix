import clsx from 'clsx'
import type { ReactNode, JSX } from 'react'

import { copy } from './Copy.css'
import * as FontSizes from '../../styles/fontStyles.css'

export interface CopyProps {
  fontStyle?: keyof FontSizes.FontSizes
  className?: string
  children?: ReactNode
  tag?: keyof Pick<JSX.IntrinsicElements, 'p' | 'blockquote' | 'div' | 'label'>
  ref?: React.RefObject<any>
}

export const Copy = ({
  fontStyle = 'XS',
  className,
  children,
  tag = 'p',
  ref,
}: CopyProps) => {
  const Element = tag

  return (
    <Element className={clsx(FontSizes[fontStyle], copy, className)} ref={ref}>
      {children}
    </Element>
  )
}
