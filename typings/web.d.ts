import { StyledProps } from 'styled-components'
import { HtmlHTMLAttributes } from 'react'

interface LayoutProps extends HtmlHTMLAttributes<any> {
  grow?: boolean | number
  spacing?: string
  spacingInfo?: {
    value: number
    unit: string
  }
  horizontal?: boolean
  center?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

interface SectionProps extends HtmlHTMLAttributes<any> {
  parentProps?: LayoutProps
  grow?: boolean | number
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}