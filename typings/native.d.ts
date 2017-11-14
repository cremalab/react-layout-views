import { ViewProperties } from 'react-native'

interface LayoutProps extends ViewProperties {
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
}

interface SectionProps extends ViewProperties {
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