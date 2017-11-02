
import { ViewProperties } from 'react-native'

interface Layout extends ViewProperties {
  grow: boolean | number
  spacing: number
  horizontal: boolean
  center: boolean
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

interface Section extends ViewProperties {
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