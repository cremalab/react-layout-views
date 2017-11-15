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
  render() {
    const {
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
      ...rest
    } = this.props
    const trimmedProps = {
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
    }
    return (
      <View style={[layoutWrapperStyle(trimmedProps), style]} {...rest}>
        <View style={layoutStyle(trimmedProps)}>
          {
            Children.map(rest.children, (child: any) =>
              child ? cloneElement(child, { parentProps: trimmedProps }) : null
            )
          }
        </View>
      </View>
    )
  }
}

const layoutWrapperStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const { grow } = props
  return {
    ...(grow && { flex: typeof grow === 'number' ? grow : 1 })
  }
}

const layoutStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const {
    horizontal, spacing, grow,
    center, centerVertical, centerHorizontal,
    top, right, bottom, left
  } = props
  return {
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
  const { grow, center, centerVertical, centerHorizontal, top, right, bottom, left } = props
  const { spacing } = props.parentProps
  return {
    margin: spacing / 2,
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
