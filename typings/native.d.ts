import { ViewProperties, ViewStyle } from 'react-native'

export interface LayoutProps extends ViewProperties {
  basis?: string | number
  bottom?: boolean
  center?: boolean
  centerHorizontal?: boolean
  centerVertical?: boolean
  grow?: boolean | number
  horizontal?: boolean
  left?: boolean
  noWrap?: boolean
  reverse?: boolean
  right?: boolean
  spacing: number
  top?: boolean
  wrapEven?: boolean
}

export interface SectionProps extends ViewProperties {
  basis?: string | number
  bottom?: boolean
  center?: boolean
  centerHorizontal?: boolean
  centerVertical?: boolean
  grow?: boolean | number
  left?: boolean
  parentProps: LayoutProps
  right?: boolean
  top?: boolean
  wrapperStyle?: ViewStyle
}