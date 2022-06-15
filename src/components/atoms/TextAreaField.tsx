import React from 'react'
import styled from 'styled-components'

import { Flex } from './Flex'

const TextAreaFieldStyled = styled.textarea<{ hasError: boolean }>`
  box-sizing: border-box;
  background: #f7f8fd;
  border-radius: 5px;
  border: ${({ hasError }) => (hasError ? '1px solid #D73737' : 'none')};
  color: #3a4374;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  padding: 12px 24px;
  outline: none;
  width: 100%;

  &:focus {
    border: none;
    border: 1px solid #4661e6;
  }
`

const TextAreaFieldWrapper = styled(Flex)`
  textarea {
    margin-bottom: 4px;
  }

  span {
    color: #d73737;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`

export const TextAreaField: React.FC<{
  errorMessage?: string
  id?: string
  name?: string
  onBlur?: any
  onChange?: any
  value?: string
}> = ({ errorMessage, id, name, onBlur, onChange, value }) => {
  return (
    <TextAreaFieldWrapper flexDirection='column'>
      <TextAreaFieldStyled
        hasError={!!errorMessage}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      <span>{errorMessage}</span>
    </TextAreaFieldWrapper>
  )
}
