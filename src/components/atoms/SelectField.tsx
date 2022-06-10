import React from 'react'
import styled from 'styled-components'

import iconDown from '../../assets/icon-arrow-down.svg'

const SelectFieldStyled = styled.select`
  border: none;
  border-radius: 5px;
  padding: 12px 24px;

  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url(${iconDown});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 24px);
  background-position-y: 50%;
  background-color: #f7f8fd;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #3a4374;
  width: 100%;

  &:focus {
    border: none;
    border: 1px solid #4661e6;
  }
`

export const SelectField: React.FC<{
  id?: string
  name?: string
  onBlur?: any
  onChange?: any
  value?: string
}> = ({ onBlur, onChange, value }) => {
  return (
    <SelectFieldStyled
      id='category'
      name='category'
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    >
      <option value='feature'>Feature</option>
      <option value='ui'>UI</option>
      <option value='ux'>UX</option>
      <option value='enhancement'>Enhancement</option>
      <option value='bug'>Bug</option>
    </SelectFieldStyled>
  )
}
