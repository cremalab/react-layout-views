import React, { Children, cloneElement, SFC } from 'react'
import styled, { css, ThemedStyledFunction, StyledComponentClass } from 'styled-components'
import CSSLength from 'css-length'
import { Layout as LayoutProps, Section as SectionProps } from '../../@types/web'

function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ) => fn as ThemedStyledFunction<P & U, T, O & U>
}

export const Layout: SFC<LayoutProps> = ({style, ...rest}) => {
  const spacingInfo = new CSSLength(rest.spacing)
  const restAmended = { ...rest, spacingInfo }
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

Layout.defaultProps = {
  spacing: '0px'
}

const LayoutWrapper = withProps<LayoutProps>()(styled.div)`
  ${({ grow, horizontal }: LayoutProps) => {
    return css`
      overflow: hidden;
      ${(grow || horizontal) && `display: flex;`}
      ${(grow || horizontal) && `flex: ${typeof grow === 'number' ? grow : 1};`}
    `
  }}
`

const LayoutInner = withProps<LayoutProps>()(styled.div)`
  ${({
    horizontal, spacingInfo, grow,
    center, top, right, bottom, left
  }: LayoutProps) => {
    return css`
      display: flex;
      ${(grow || horizontal) && `display: flex;`}
      ${(grow || horizontal) && `flex: ${typeof grow === 'number' ? grow : 1};`}
      flex-direction: ${horizontal ? 'row' : 'column'};
      margin: ${(-(spacingInfo.value / 2)).toString() + spacingInfo.unit};
      ${horizontal 
        ? css`
          ${center && `align-items: center; justify-content: center;` }
          ${top    && `align-items: flex-start;`                      }
          ${right  && `justify-content: flex-end;`                    }
          ${bottom && `align-items: flex-end;`                        }
          ${left   && `justify-content: flex-start;`                  }
        `
        : css`
          ${center && `align-items: center; justify-content: center;` }
          ${top    && `justify-content: flex-start;`                  }
          ${right  && `align-items: flex-end;`                        }
          ${bottom && `justify-content: flex-end;`                    }
          ${left   && `align-items: flex-start;`                      }
        `
      }
    `
  }}
`

export const Section = withProps<SectionProps>()(styled.div)`
  ${(props: SectionProps) => {
    const { grow, center, centerVertical, centerHorizontal, top, right, bottom, left } = props
    const { horizontal, spacingInfo } = props.parentProps
    return css`
      display: flex;
      flex-direction: column;
      padding: ${(spacingInfo.value / 2).toString() + spacingInfo.unit};
      ${grow             && `flex: ${typeof grow === 'number' ? grow : 1 };` }
      ${center           && `align-items: center; justify-content: center;`  }
      ${centerVertical   && `justify-content: center;`                       } 
      ${centerHorizontal && `align-items: center;`                           }     
      ${center           && `align-items: center; justify-content: center;`  }
      ${top              && `justify-content: flex-start;`                   }
      ${right            && `align-items: flex-end;`                         }
      ${bottom           && `justify-content: flex-end;`                     }
      ${left             && `align-items: flex-start;`                       }
    `
  }}
`