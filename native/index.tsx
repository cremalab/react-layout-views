import * as React from 'react'
import { Children, cloneElement, PureComponent } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { LayoutProps, SectionProps } from '../typings/native'

export type LayoutProps = LayoutProps;
export class Layout extends PureComponent<LayoutProps> {
  public static displayName = 'Layout'
  public static defaultProps: Partial<LayoutProps> = {
    spacing: 0
  }

  constructor() {
    super()
    this.handleBasis = this.handleBasis.bind(this)
  }

  render() {
    const {
      basis,
      bottom,
      center,
      centerHorizontal,
      centerVertical,
      grow,
      horizontal,
      left,
      right,
      spacing,
      style,
      top,
      wrapEven,
      ...rest
    } = this.props
    const trimmedProps = {
      basis,
      bottom,
      center,
      centerHorizontal,
      centerVertical,
      grow,
      horizontal,
      left,
      right,
      spacing,
      top,
      wrapEven,
    }
    return (
      <View style={[layoutWrapperStyle(trimmedProps), style]} {...rest}>
        <View style={layoutInnerStyle(trimmedProps)}>
          {
            Children.map(rest.children, (child: any) =>
              child ? cloneElement(child, { parentProps: trimmedProps }) : null
            )
          }
          {
            (basis && wrapEven) && this.handleBasis(trimmedProps)
          }
        </View>
      </View>
    )
  }

  handleBasis(trimmedProps: LayoutProps) {
    const { children, basis } = this.props
    if (children instanceof Array) {
      const length = children && children.length
      return children.map((_, i) => <Section
        key={i}
        basis={basis}
        parentProps={trimmedProps}
        wrapperStyle={{
          paddingTop: 0,
          paddingBottom: 0
        }}
      />)
    } else {
      return null
    }
  }
}

const layoutWrapperStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const { grow } = props
  return {
    ...(grow && { flexGrow: typeof grow === 'number' ? grow : 1 }),
    // ...(grow && { alignSelf: 'stretch' })
  }
}

const layoutInnerStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const {
    noWrap, horizontal, spacing, grow,
    center, centerVertical, centerHorizontal,
    top, right, bottom, left
  } = props
  return {
    ...(grow && { flexGrow: typeof grow === 'number' ? grow : 1 }),
    ...(horizontal && { flexWrap: 'wrap' }),
    ...(noWrap && { flexWrap: 'nowrap' }),
    flexDirection: horizontal ? 'row' : 'column',
    margin: -(spacing / 2),
    ...(horizontal
      ? {
        ...(center && { alignItems: 'center', justifyContent: 'center' }),
        ...(centerHorizontal && { justifyContent: 'center' }),
        ...(centerVertical && { alignItems: 'center' }),
        ...(bottom && { alignItems: 'flex-end' }),
        ...(left && { justifyContent: 'flex-start' }),
        ...(right && { justifyContent: 'flex-end' }),
        ...(top && { alignItems: 'flex-start' }),
        alignContent: 'stretch'
      }
      : {
        ...(center && { alignItems: 'center', justifyContent: 'center' }),
        ...(centerHorizontal && { alignItems: 'center' }),
        ...(centerVertical && { justifyContent: 'center' }),
        ...(bottom && { justifyContent: 'flex-end' }),
        ...(left && { alignItems: 'flex-start' }),
        ...(right && { alignItems: 'flex-end' }),
        ...(top && { justifyContent: 'flex-start' }),
      }
    )
  }
}

export type SectionProps = SectionProps;
export class Section extends PureComponent<SectionProps> {
  public static displayName = 'Section'
  render() {
    const { style, wrapperStyle, children, ...rest } = this.props
    return (
      <View style={[sectionWrapperStyle(rest), wrapperStyle]}>
        <View style={[sectionInnerStyle(rest), style]}>
          {children}
        </View>
      </View>
    )
  }
}

const sectionWrapperStyle = (props: SectionProps): StyleProp<ViewStyle> => {
  const {
    basis: ownBasis, grow, center, centerVertical, centerHorizontal,
    top, right, bottom, left, parentProps
  } = props
  const { spacing } = parentProps
  const basis = ownBasis || parentProps && parentProps.basis
  return {
    ...(parentProps.horizontal && !basis ? {flexDirection: 'row'} : {}),
    padding: spacing / 2,
    alignItems: 'stretch',
    ...(basis && { flexBasis: basis, flexGrow: 1 }),
    ...(grow && { flexGrow: typeof grow === 'number' ? grow : 1 }),
  }
}

const sectionInnerStyle = (props: SectionProps): StyleProp<ViewStyle> => {
  const {
    basis: ownBasis, grow: ownGrow, center, centerVertical, centerHorizontal,
    top, right, bottom, left, parentProps
  } = props
  const { spacing } = parentProps
  const basis = ownBasis || parentProps && parentProps.basis
  const grow = ownGrow

  return {
    ...((grow || basis) && { flexGrow: typeof grow === 'number' ? grow : 1 }),
    ...(centerVertical && { justifyContent: 'center' }),
    ...(centerHorizontal && { alignItems: 'center' }),
    ...(center && { alignItems: 'center', justifyContent: 'center' }),
    ...(top && { justifyContent: 'flex-start' }),
    ...(right && { alignItems: 'flex-end' }),
    ...(bottom && { justifyContent: 'flex-end' }),
    ...(left && { alignItems: 'flex-start' }),
  }
}
