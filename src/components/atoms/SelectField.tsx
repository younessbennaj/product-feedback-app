import React from 'react'
import styled from 'styled-components'

const SelectFieldStyled = styled.select`
  background: #f7f8fd;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
`

export const SelectField: React.FC = () => {
  return <SelectFieldStyled></SelectFieldStyled>
}
