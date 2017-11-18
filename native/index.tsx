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
      centerVertical,
      centerHorizontal,
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
      centerVertical,
      centerHorizontal,
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
      return children.map((x, i) => <Section
        key={i}
        basis={basis}
        parentProps={trimmedProps}
        style={{
          marginTop: 0,
          marginBottom: 0
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
    ...(grow && { flex: typeof grow === 'number' ? grow : 1 }),
    ...(grow && { alignSelf: 'stretch' })
  }
}

const layoutInnerStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const {
    noWrap, horizontal, spacing, grow,
    center, centerVertical, centerHorizontal,
    top, right, bottom, left
  } = props
  return {
    ...(horizontal && { flexWrap: 'wrap' }),
    ...(noWrap && { flexWrap: 'nowrap' }),
    flexDirection: horizontal ? 'row' : 'column',
    ...(grow && { flex: typeof grow === 'number' ? grow : 1 }),
    margin: -(spacing / 2),
    ...(horizontal
      ? {
        ...(center && { alignItems: 'center', justifyContent: 'center' }),
        ...(centerVertical && { alignItems: 'center' }),
        ...(centerHorizontal && { justifyContent: 'center' }),
        ...(top && { alignItems: 'flex-start' }),
        ...(right && { justifyContent: 'flex-end' }),
        ...(bottom && { alignItems: 'flex-end' }),
        ...(left && { justifyContent: 'flex-start' }),
      }
      : {
        ...(center && { alignItems: 'center', justifyContent: 'center' }),
        ...(centerVertical && { justifyContent: 'center' }),
        ...(centerHorizontal && { alignItems: 'center' }),
        ...(top && { justifyContent: 'flex-start' }),
        ...(right && { alignItems: 'flex-end' }),
        ...(bottom && { justifyContent: 'flex-end' }),
        ...(left && { alignItems: 'flex-start' }),
      }
    )
  }
}

export type SectionProps = SectionProps;
export class Section extends PureComponent<SectionProps> {
  public static displayName = 'Section'
  render() {
    const { style, ...rest } = this.props
    return (
      <View style={[sectionWrapperStyle(rest), style]}>
        {rest.children}
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
    margin: spacing / 2,
    ...(basis && { flexBasis: basis, flexGrow: 1 }),
    ...(grow && { flex: typeof grow === 'number' ? grow : 1 }),
    ...(center && { alignItems: 'center', justifyContent: 'center' }),
    ...(centerVertical && { justifyContent: 'center' }),
    ...(centerHorizontal && { alignItems: 'center' }),
    ...(top && { justifyContent: 'flex-start' }),
    ...(right && { alignItems: 'flex-end' }),
    ...(bottom && { justifyContent: 'flex-end' }),
    ...(left && { alignItems: 'flex-start' }),
  }
}
