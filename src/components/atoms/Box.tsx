import styled from 'styled-components'
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system'

export const Box = styled.div<
  BorderProps & LayoutProps & SpaceProps & FlexboxProps & PositionProps
>`
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox};
`
