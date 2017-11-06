import { StyledProps } from 'styled-components'
import { HtmlHTMLAttributes, CSSLength } from 'react'

interface Layout extends HtmlHTMLAttributes<any> {
  grow?: boolean | number
  spacing?: CSSLength
  spacingInfo?: {
    value: number
    unit: CSSLength
  }
  horizontal?: boolean
  center?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

interface Section extends HtmlHTMLAttributes<any> {
  parentProps?: Layout
  grow?: boolean | number
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}