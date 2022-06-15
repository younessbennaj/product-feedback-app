import styled from 'styled-components'
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system'

import { Box } from './Box'

export const Flex = styled(Box)<FlexboxProps & SpaceProps>`
  display: flex;
  ${flexbox};
  ${space};
`
