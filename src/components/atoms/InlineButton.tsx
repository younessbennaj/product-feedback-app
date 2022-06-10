import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IconLeft } from '../../assets/icon-arrow-left.svg'

const InlineButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  span {
    margin-left: 16px;
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

export const InlineButton: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <InlineButtonStyled>
      <IconLeft />
      <span>{children}</span>
    </InlineButtonStyled>
  )
}
