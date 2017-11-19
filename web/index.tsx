import * as React from 'react'
import { Children, cloneElement, PureComponent } from 'react'
import styled, { css, ThemedStyledFunction, StyledComponentClass } from 'styled-components'
import * as CSSLength from 'css-length'
import { string as toStyleString } from 'to-style'
import { LayoutProps, SectionProps } from '../typings/web'

function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ) => fn as ThemedStyledFunction<P & U, T, O & U>
}

type Cond = boolean | undefined | number | string | object

const condition = (cond: Cond, style: string | undefined): string => {
  return !!(cond) ? style ? style : '' : ''
}

export type LayoutProps = LayoutProps;
export class Layout extends PureComponent<LayoutProps> {
  public static displayName = 'Layout'
  public static defaultProps: Partial<LayoutProps> = {
    spacing: '0px',
    spacingValue: 0,
    spacingUnit: 'px',
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
      noWrap,
      right,
      spacing,
      style,
      top,
      wrapEven,
      ...rest
    } = this.props
    const styleString = toStyleString(this.props.style)
    const { value: spacingValue, unit: spacingUnit } = new CSSLength(this.props.spacing)
    const trimmedProps = {
      basis,
      bottom,
      center,
      centerHorizontal,
      centerVertical,
      grow,
      horizontal,
      left,
      noWrap,
      right,
      spacingUnit,
      spacingValue,
      styleString,
      top,
      wrapEven,
    }
    return (
      <LayoutWrapper {...trimmedProps} {...rest}>
        <LayoutInner {...trimmedProps}>
          {
            Children.map(rest.children, (child: any) =>
              child ? cloneElement(child, { parentProps: trimmedProps }) : null
            )
          }
          {
            (basis && wrapEven) && this.handleBasis(trimmedProps)
          }
        </LayoutInner>
      </LayoutWrapper>
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

const LayoutWrapper = withProps<LayoutProps>()(styled.div) `
  ${({ grow, horizontal, styleString }: LayoutProps) => {
    return css`
      overflow: hidden;
      display: flex;
      ${condition(grow, `flex: ${typeof grow === 'number' ? grow : 1};`)}
      ${condition(grow, `align-self: stretch;`)}
      ${condition(styleString, styleString)}
    `
  }}
`

const LayoutInner = withProps<LayoutProps>()(styled.div) `
  ${({
    noWrap, horizontal, grow, spacingValue, spacingUnit,
    center, centerVertical, centerHorizontal,
    top, right, bottom, left
  }: LayoutProps) => {
    return css`
      display: flex;
      flex: 1;
      ${condition(horizontal, `flex-wrap: wrap;`)}
      ${condition(noWrap, `flex-wrap: nowrap;`)}
      ${condition(grow || horizontal, `align-self: stretch;`)}
      flex-direction: ${horizontal ? 'row' : 'column'};
      ${condition(spacingValue && spacingUnit, `margin: ${(-((spacingValue || 0) / 2)).toString() + spacingUnit};`)}
      ${horizontal
        ? css`
          ${condition(center, `align-items: center; justify-content: center;`)}
          ${condition(centerVertical, `align-items: center;`)} 
          ${condition(centerHorizontal, `justify-content: center;`)}   
          ${condition(top, `align-items: flex-start;`)}
          ${condition(right, `justify-content: flex-end;`)}
          ${condition(bottom, `align-items: flex-end;`)}
          ${condition(left, `justify-content: flex-start;`)}
        `
        : css`
          ${condition(center, `align-items: center; justify-content: center;`)}
          ${condition(centerVertical, `justify-content: center;`)} 
          ${condition(centerHorizontal, `align-items: center;`)}   
          ${condition(top, `justify-content: flex-start;`)}
          ${condition(right, `align-items: flex-end;`)}
          ${condition(bottom, `justify-content: flex-end;`)}
          ${condition(left, `align-items: flex-start;`)}
        `
      }
    `
  }}
`

export type SectionProps = SectionProps;
export class Section extends PureComponent<SectionProps> {
  public static displayName = 'Section'
  render() {
    const { style, wrapperStyle, children, ...rest } = this.props
    const wrapperStyleString = toStyleString(wrapperStyle)
    const styleString = toStyleString(style)
    return (
      <SectionWrapper {...rest} styleString={wrapperStyleString}>
        <SectionInner {...rest} styleString={styleString}>
          {children}
        </SectionInner>
      </SectionWrapper>
    )
  }
}

const SectionWrapper = withProps<SectionProps>()(styled.div) `
  ${(props) => {
    const {
      basis: ownBasis, grow, parentProps, styleString
    } = props
    const basis = ownBasis || parentProps && parentProps.basis
    return css`
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: ${((parentProps && parentProps.spacingValue || 0) / 2).toString() + (parentProps && parentProps.spacingUnit)};
      ${condition(basis, `flex-basis: ${basis}; flex-grow: 1;`)}
      ${condition(grow, `flex: ${typeof grow === 'number' ? grow : 1};`)}
      ${condition(styleString, styleString)}
    `
  }}
`

const SectionInner = withProps<SectionProps>()(styled.div) `
  ${(props) => {
    const {
      center, centerVertical, centerHorizontal,
      top, right, bottom, left, parentProps, styleString
    } = props
    return css`
      display: flex;
      flex: 1;
      flex-direction: column;
      box-sizing: border-box;
      ${condition(centerVertical, `justify-content: center;`)} 
      ${condition(centerHorizontal, `align-items: center;`)}     
      ${condition(center, `align-items: center; justify-content: center;`)}
      ${condition(top, `justify-content: flex-start;`)}
      ${condition(right, `align-items: flex-end;`)}
      ${condition(bottom, `justify-content: flex-end;`)}
      ${condition(left, `align-items: flex-start;`)}
      ${condition(styleString, styleString)}
    `
  }}
`