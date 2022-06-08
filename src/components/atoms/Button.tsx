import React from 'react'
import styled from 'styled-components'

const buttonBackgroundColor = {
  primary: { default: '#ad1fea', hover: '#c75af6' },
  secondary: { default: '#3A4374', hover: '#656EA3' },
}

const ButtonStyled = styled.button<{ variant: string }>`
  background: ${({ variant }) =>
    buttonBackgroundColor[variant as keyof typeof buttonBackgroundColor]
      .default};
  border-radius: 10px;
  border: none;
  padding: 12px 24px;

  &:hover {
    background: ${({ variant }) =>
      buttonBackgroundColor[variant as keyof typeof buttonBackgroundColor]
        .hover};
  }

  span {
    color: #f2f4fe;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
`

export const Button: React.FC<{
  children: React.ReactNode
  variant: string
}> = ({ children, variant }) => {
  return (
    <ButtonStyled variant={variant}>
      <span>{children}</span>
    </ButtonStyled>
  )
}
