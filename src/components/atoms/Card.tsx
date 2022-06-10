import * as React from 'react'
import styled from 'styled-components'
import { PositionProps, SpaceProps } from 'styled-system'

import { Box } from './Box'

const CardStyled = styled(Box)`
  background: #ffffff;
  border-radius: 10px;
  padding: 50px 42px;
`
export const Card: React.FC<
  { children: React.ReactNode } & PositionProps & SpaceProps
> = ({ children, ...props }) => {
  return <CardStyled {...props}>{children}</CardStyled>
}
