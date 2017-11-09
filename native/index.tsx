import React, { Children, cloneElement, PureComponent } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { LayoutProps, SectionProps } from '../typings/native'

export class Layout extends PureComponent<LayoutProps> {
  public static defaultProps: Partial<LayoutProps> = {
    spacing: 0
  }
  render() {
    const {style, ...rest} = this.props
    return (
      <View style={[layoutWrapperStyle(rest), style]}>
        <View style={layoutStyle(rest)}>
          {
            Children.map(rest.children, (child: any) =>
              child ? cloneElement(child, { parentProps: rest }) : null
            )
          }
        </View>
      </View>
    )
  }
}

const layoutWrapperStyle = (props: LayoutProps): StyleProp<ViewStyle>  => {
  const { grow } = props
  return {
    ...(grow ? { flex: typeof grow === 'number' ? grow : 1 } : { })
  }
}

const layoutStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const { 
    horizontal, spacing, grow,
    center, top, right, bottom, left,
  } = props
  return {
    flexDirection: horizontal ? 'row' : 'column',
    ...(grow ? { flex: typeof grow === 'number' ? grow : 1 } : { }),
    margin: -(spacing / 2),
    ...(horizontal
      ? {
        ...(center ? { alignItems: 'center', justifyContent: 'center' } : {}),
        ...(top    ? { alignItems: 'flex-start' }                       : {}),
        ...(right  ? { justifyContent: 'flex-end' }                     : {}),
        ...(bottom ? { alignItems: 'flex-end' }                         : {}),
        ...(left   ? { justifyContent: 'flex-start' }                   : {}),
      }
      : {
        ...(center ? { alignItems: 'center', justifyContent: 'center' } : {}),
        ...(top    ? { justifyContent: 'flex-start' }                   : {}),
        ...(right  ? { alignItems: 'flex-end' }                         : {}),
        ...(bottom ? { justifyContent: 'flex-end' }                     : {}),
        ...(left   ? { alignItems: 'flex-start' }                       : {}),
      }
    )
  }
}

export class Section extends PureComponent<SectionProps> {
  render() {
    const { style, ...rest } = this.props
    return <View style={[sectionStyle(rest), style]}>{rest.children}</View>
  }
}

const sectionStyle = (props: SectionProps): StyleProp<ViewStyle> => {
  const { grow, center, centerVertical, centerHorizontal, top, right, bottom, left } = props
  const { horizontal, spacing } = props.parentProps
  return {
    display: 'flex',
    padding: spacing / 2,
    ...(grow             ? { flex: typeof grow === 'number' ? grow : 1 }      : {}),
    ...(center           ? { alignItems: 'center', justifyContent: 'center' } : {}),
    ...(centerVertical   ? { justifyContent: 'center' }                       : {}),
    ...(centerHorizontal ? { alignItems: 'center' }                           : {}),
    ...(top              ? { justifyContent: 'flex-start' }                   : {}),
    ...(right            ? { alignItems: 'flex-end' }                         : {}),
    ...(bottom           ? { justifyContent: 'flex-end' }                     : {}),
    ...(left             ? { alignItems: 'flex-start' }                       : {}),
  }
}