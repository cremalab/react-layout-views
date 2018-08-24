import * as React from 'react'
import { Children, cloneElement, PureComponent } from 'react'
import * as CSSLength from 'css-length'
import { LayoutProps, SectionProps } from '../typings/web'

type Cond = boolean | undefined | number | string | object

const conditionAttrs = (cond: Cond, cssObj: React.CSSProperties): React.CSSProperties => {
  return !!(cond) ? cssObj : {}
};

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
      reverse,
      right,
      spacing,
      top,
      wrapEven,
      ...rest
    } = this.props
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
      reverse,
      right,
      spacingUnit,
      spacingValue,
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

const LayoutWrapper = ({ grow, horizontal, styleString, style, children }: LayoutProps) => {
  const myStyle: React.CSSProperties = {
    display: 'flex',
    flex: grow ? typeof grow === 'number' ? grow : 1 : undefined,
    alignSelf: grow ? 'stretch' : undefined,
    ...style
  }
  return (
    <div style={myStyle} children={children} />
  )
}

const LayoutInner = ({
  bottom,
  center,
  centerHorizontal,
  centerVertical,
  grow,
  horizontal,
  left,
  noWrap,
  reverse,
  right,
  spacingUnit,
  spacingValue,
  top,
  children,
}: LayoutProps) => {
  const flexStart = reverse ? 'flex-end' : 'flex-start'
  const flexEnd = reverse ? 'flex-start' : 'flex-end'
  const myStyle: React.CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    justifyContent: flexStart,
    flexWrap: horizontal ? 'wrap' : noWrap ? 'nowrap' : undefined,
    alignSelf: grow || horizontal ? 'stretch' : undefined,
    flexDirection: horizontal
      ? reverse ? 'row-reverse' : 'row'
      : reverse ? 'column-reverse' : 'column',
    ...conditionAttrs(spacingValue && spacingUnit, { margin: (-((spacingValue || 0) / 2)).toString() + spacingUnit }),
    ...conditionAttrs(center, { alignItems: "center", justifyContent: "center" }),
    ...conditionAttrs(centerVertical, horizontal ? { alignItems: "center" } : { justifyContent: "center" }),
    ...conditionAttrs(centerHorizontal, horizontal ? { justifyContent: "center" } : { alignItems: "center" }),
    ...conditionAttrs(top, horizontal ? { alignItems: flexStart } : { justifyContent: flexStart }),
    ...conditionAttrs(right, horizontal ? { justifyContent: flexEnd } : { alignItems: flexEnd }),
    ...conditionAttrs(bottom, horizontal ? { alignItems: flexEnd } : { justifyContent: flexEnd }),
    ...conditionAttrs(left, horizontal ? { justifyContent: flexStart } : { alignItems: flexStart }),
  }
  return (
    <div style={myStyle} children={children} />
  )
};

export type SectionProps = SectionProps;
export class Section extends PureComponent<SectionProps> {
  public static displayName = 'Section'
  render() {
    const { style, wrapperStyle, children, ...rest } = this.props
    return (
      <SectionWrapper {...rest} style={wrapperStyle}>
        <SectionInner {...rest} style={style}>
          {children}
        </SectionInner>
      </SectionWrapper>
    )
  }
}

const SectionWrapper = (props: SectionProps) => {
  const {
    basis: ownBasis, grow, parentProps, style, children,
  } = props;
  const basis = ownBasis || parentProps && parentProps.basis
  const myStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: ((parentProps && parentProps.spacingValue || 0) / 2).toString() + (parentProps && parentProps.spacingUnit),
    ...conditionAttrs(basis, { flexBasis: basis, flexGrow: 1 }),
    ...conditionAttrs(grow, { flex: typeof grow === 'number' ? grow : 1 }),
    ...style,
  }
  return (
    <div style={myStyle} children={children} />
  )
}

const SectionInner = (props: SectionProps) => {
  const {
    center, centerVertical, centerHorizontal,
    top, right, bottom, left, parentProps, style, children,
  } = props
  const myStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    boxSizing: "border-box",
    ...conditionAttrs(centerVertical, { justifyContent: "center" }),
    ...conditionAttrs(centerHorizontal, { alignItems: "center" }),
    ...conditionAttrs(center, { alignItems: "center", justifyContent: "center" }),
    ...conditionAttrs(top, { justifyContent: "flex-start" }),
    ...conditionAttrs(right, { alignItems: "flex-end" }),
    ...conditionAttrs(bottom, { justifyContent: "flex-end" }),
    ...conditionAttrs(left, { alignItems: "flex-start" }),
    ...style
  }
  return (
    <div style={myStyle} children={children} />
  )
}