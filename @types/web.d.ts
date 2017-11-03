import { StyledProps } from 'styled-components'

interface Layout extends StyledProps<any> {
  grow: boolean | number
  spacing: string
  spacingInfo: {
    value: number
    unit: string
  }
  horizontal: boolean
  center: boolean
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

interface Section extends StyledProps<any> {
  parentProps: Layout
  grow: boolean | number
  center: boolean
  centerVertical: boolean
  centerHorizontal: boolean
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}