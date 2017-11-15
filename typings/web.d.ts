import * as React from 'react'

export interface LayoutProps extends React.HTMLProps<React.ReactNode> {
  grow?: boolean | number
  spacing?: string
  spacingValue?: number
  spacingUnit?: string
  styleString?: string
  horizontal?: boolean
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

export interface SectionProps extends React.HTMLProps<React.ReactNode> {
  parentProps?: LayoutProps
  styleString?: string
  grow?: boolean | number
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}