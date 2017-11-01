// import * as React from 'react'
import React, { Children, cloneElement, SFC } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Layout as LayoutProps, Section as SectionProps } from '../../lib/types'

export const Layout: SFC<LayoutProps> = ({style, ...rest}) => {
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

Layout.defaultProps = {
  spacing: 0
}

const layoutWrapperStyle = (props: LayoutProps): StyleProp<ViewStyle>  => {
  const { grow } = props
  return {
    display: 'flex',
    ...(grow ? { flex: typeof grow === 'number' ? grow : 1 } : {})
  }
}

const layoutStyle = (props: LayoutProps): StyleProp<ViewStyle> => {
  const { 
    horizontal, spacing,
    center, top, right, bottom, left,
  } = props
  return {
    display: 'flex',
    flexDirection: horizontal ? 'row' : 'column',
    margin: -(spacing / 2),
    flex: 1,
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

export const Section: SFC<SectionProps> = ({style, ...rest}) =>
  <View style={[sectionStyle(rest), style]}>{rest.children}</View>

const sectionStyle = (props: SectionProps): StyleProp<ViewStyle> => {
  const { grow, center, top, right, bottom, left } = props
  const { spacing } = props.parentProps
  return {
    display: 'flex',
    padding: spacing / 2,
    ...(grow   ? { flex: typeof grow === 'number' ? grow : 1 }      : {}),
    ...(center ? { alignItems: 'center', justifyContent: 'center' } : {}),
    ...(top    ? { justifyContent: 'flex-start' }                   : {}),
    ...(right  ? { alignItems: 'flex-end' }                         : {}),
    ...(bottom ? { justifyContent: 'flex-end' }                     : {}),
    ...(left   ? { alignItems: 'flex-start' }                       : {}),
  }
}