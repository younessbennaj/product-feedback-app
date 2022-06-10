import * as React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 50px 42px;
`
export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>
}
