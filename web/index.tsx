import React, { Children, cloneElement, PureComponent } from 'react'
import styled, { css, ThemedStyledFunction, StyledComponentClass } from 'styled-components'
import CSSLength from 'css-length'
import { LayoutProps, SectionProps } from '../typings/web'
import { string as toStyleString } from 'to-style'

function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ) => fn as ThemedStyledFunction<P & U, T, O & U>
}

export class Layout extends PureComponent<LayoutProps> {
  public static defaultProps: Partial<LayoutProps> = {
    spacing: '0px'
  }
  render() {
    const { style, spacing, ...rest } = this.props
    const styleString = toStyleString(style)
    const spacingInfo = new CSSLength(spacing)
    const restAmended = { ...rest, spacingInfo, styleString }
    return (
      <LayoutWrapper {...restAmended}>
        <LayoutInner {...restAmended}>
          {
            Children.map(rest.children, (child: any) =>
              child ? cloneElement(child, { parentProps: restAmended }) : null
            )
          }
        </LayoutInner>
      </LayoutWrapper>
    )
  }
}

const LayoutWrapper = withProps<LayoutProps>()(styled.div)`
  ${({ grow, horizontal, styleString }: LayoutProps) => {
    return css`
      overflow: hidden;
      ${(grow || horizontal) && `display: flex;`}
      ${grow && `flex: ${typeof grow === 'number' ? grow : 1};`}
      ${grow && `align-self: stretch;`}
      ${styleString}
    `
  }}
`

const LayoutInner = withProps<LayoutProps>()(styled.div)`
  ${({
    horizontal, spacingInfo, grow,
    center, centerVertical, centerHorizontal, 
    top, right, bottom, left
  }: LayoutProps) => {
    return css`
      display: flex;
      ${(grow || horizontal) && `display: flex;`}
      ${(grow || horizontal) && `flex: 1;`}
      ${(grow || horizontal) && `align-self: stretch;`}
      flex-direction: ${horizontal ? 'row' : 'column'};
      margin: ${(-(spacingInfo.value / 2)).toString() + spacingInfo.unit};
      ${horizontal 
        ? css`
          ${center           && `align-items: center; justify-content: center;` }
          ${centerVertical   && `align-items: center;`                          } 
          ${centerHorizontal && `justify-content: center;`                      }   
          ${top              && `align-items: flex-start;`                      }
          ${right            && `justify-content: flex-end;`                    }
          ${bottom           && `align-items: flex-end;`                        }
          ${left             && `justify-content: flex-start;`                  }
        `
        : css`
          ${center           && `align-items: center; justify-content: center;` }
          ${centerVertical   && `justify-content: center;`                      } 
          ${centerHorizontal && `align-items: center;`                          }   
          ${top              && `justify-content: flex-start;`                  }
          ${right            && `align-items: flex-end;`                        }
          ${bottom           && `justify-content: flex-end;`                    }
          ${left             && `align-items: flex-start;`                      }
        `
      }
    `
  }}
`

export class Section extends PureComponent<SectionProps> {
  render() {
    const { style, ...rest } = this.props
    const styleString = toStyleString(style)
    return (
      <SectionWrapper {...rest}>
        <SectionInner {...rest} styleString={styleString}>
          {rest.children}
        </SectionInner>
      </SectionWrapper>
    )
  }
}

export const SectionWrapper = withProps<SectionProps>()(styled.div)`
  ${(props: SectionProps) => {
    const { grow, center, centerVertical, centerHorizontal, top, right, bottom, left } = props
    const { horizontal, spacingInfo } = props.parentProps
    return css`
      display: flex;
      flex-direction: column;
      padding: ${(spacingInfo.value / 2).toString() + spacingInfo.unit};
      ${grow && `flex: ${typeof grow === 'number' ? grow : 1 };` }
    `
  }}
`

export const SectionInner = withProps<SectionProps>()(styled.div)`
  ${(props: SectionProps) => {
    const { grow, center, centerVertical, centerHorizontal, top, right, bottom, left, styleString } = props
    return css`
      display: flex;
      flex-direction: column;
      ${grow             && `flex: ${typeof grow === 'number' ? grow : 1 };` }
      ${center           && `align-items: center; justify-content: center;`  }
      ${centerVertical   && `justify-content: center;`                       } 
      ${centerHorizontal && `align-items: center;`                           }     
      ${center           && `align-items: center; justify-content: center;`  }
      ${top              && `justify-content: flex-start;`                   }
      ${right            && `align-items: flex-end;`                         }
      ${bottom           && `justify-content: flex-end;`                     }
      ${left             && `align-items: flex-start;`                       }
      ${styleString};
    `
  }}
`