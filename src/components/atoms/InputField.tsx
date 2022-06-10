import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import { Flex } from './Flex'

const InputFieldStyled = styled.input<{ hasError: boolean }>`
  background: #f7f8fd;
  border: ${({ hasError }) => (hasError ? '1px solid #D73737' : 'none')};
  border-radius: 5px;
  color: #3a4374;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  padding: 12px 24px;
  outline: none;

  &:focus {
    border: none;
    border: 1px solid #4661e6;
  }
`

const InputFieldWrapper = styled(Flex)`
  input {
    margin-bottom: 4px;
  }
  span {
    color: #d73737;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`

export const InputField: React.FC<
  {
    errorMessage?: string
    id?: string
    name?: string
    onBlur?: any
    onChange?: any
    value?: string
  } & SpaceProps
> = ({ errorMessage, id, name, onBlur, onChange, value, ...props }) => {
  return (
    <InputFieldWrapper flexDirection='column' {...props}>
      <InputFieldStyled
        hasError={!!errorMessage}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type='text'
        value={value}
      />
      <span>{errorMessage}</span>
    </InputFieldWrapper>
  )
}
