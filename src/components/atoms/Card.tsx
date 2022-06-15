import * as React from 'react'
import styled from 'styled-components'
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'

import { Box } from './Box'

const CardStyled = styled(Box)`
  background: #ffffff;
  border-radius: 10px;
`
export const Card: React.FC<
  { children: React.ReactNode } & LayoutProps & PositionProps & SpaceProps
> = ({ children, ...props }) => {
  return (
    <CardStyled px={['24px', '42px']} py={['24px', '50px']} {...props}>
      {children}
    </CardStyled>
  )
}
