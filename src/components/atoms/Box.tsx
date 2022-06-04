import styled from 'styled-components'
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system'

export const Box = styled.div<LayoutProps & SpaceProps & FlexboxProps>`
  ${layout}
  ${space}
  ${flexbox};
`
