import clsx from 'clsx'
import type { ReactNode, JSX } from 'react'
import * as FontSizes from '../../styles/fontStyles.css'
import { descriptiveList, list } from './List.css'

export interface ListProps {
  tag?: keyof Pick<JSX.IntrinsicElements, 'ul' | 'ol'>
  fontStyle?: keyof FontSizes.FontSizes
  className?: string
  children?: ReactNode
  ref?: React.RefObject<any>
}

export const List = ({
  tag = 'ul',
  fontStyle = 'XS',
  className,
  children,
  ref,
}: ListProps) => {
  const Element = tag

  return (
    <Element className={clsx(FontSizes[fontStyle], list, className)} ref={ref}>
      {children}
    </Element>
  )
}

interface DescriptiveListProps {
  data: [title: string, item: ReactNode][]
}

export const DescriptiveList = ({ data }: DescriptiveListProps) => {
  return (
    <dl className={descriptiveList}>
      {data.map(datum => (
        <div key={datum[0]}>
          <dt>{`${datum[0]} –`}</dt>
          <dd>{datum[1]}</dd>
        </div>
      ))}
    </dl>
  )
}
