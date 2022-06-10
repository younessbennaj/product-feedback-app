import styled from 'styled-components'
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system'

export const Box = styled.div<
  BorderProps & LayoutProps & SpaceProps & FlexboxProps
>`
  ${border}
  ${layout}
  ${space}
  ${flexbox};
`
