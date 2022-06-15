import React from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'

import { ReactComponent as IconLeft } from '../../assets/icon-arrow-left.svg'
import { Box } from './Box'

const InlineButtonStyled = styled(Box)`
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
  }

  :hover {
    span {
      text-decoration: underline;
    }
  }
`

export const InlineButton: React.FC<
  {
    children: React.ReactNode
    onClick?: () => void
  } & SpaceProps
> = ({ children, onClick, ...props }) => {
  return (
    <InlineButtonStyled as='button' onClick={onClick} {...props}>
      <IconLeft />
      <Box as='span' ml='16px'>
        {children}
      </Box>
    </InlineButtonStyled>
  )
}
