import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import { Box } from './Box'

export const Flex = styled(Box)<FlexboxProps>`
  display: flex;
  ${flexbox};
`
