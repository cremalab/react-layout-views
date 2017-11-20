import * as React from 'react'

export interface LayoutProps extends React.HTMLProps<React.ReactNode> {
  basis?: string
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
  spacing?: string
  spacingUnit?: string
  spacingValue?: number
  styleString?: string
  top?: boolean
  wrapEven?: boolean
}

export interface SectionProps extends React.HTMLProps<React.ReactNode> {
  basis?: string
  bottom?: boolean
  center?: boolean
  centerHorizontal?: boolean
  centerVertical?: boolean
  grow?: boolean | number
  left?: boolean
  parentProps?: LayoutProps
  right?: boolean
  styleString?: string
  top?: boolean
  wrapperStyle?: React.CSSProperties
}