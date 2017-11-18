import { ViewProperties } from 'react-native'

export interface LayoutProps extends ViewProperties {
  basis?: string | number
  grow?: boolean | number
  spacing: number
  horizontal?: boolean
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
  noWrap?: boolean
  wrapEven?: boolean
}

export interface SectionProps extends ViewProperties {
  basis?: string | number
  parentProps: LayoutProps
  grow?: boolean | number
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}