import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'

const buttonBackgroundColor = {
  primary: { default: '#ad1fea', hover: '#c75af6' },
  secondary: { default: '#3A4374', hover: '#656EA3' },
}

const ButtonStyled = styled.button<{ type?: string; variant: string }>`
  background: ${({ variant }) =>
    buttonBackgroundColor[variant as keyof typeof buttonBackgroundColor]
      .default};
  border-radius: 10px;
  border: none;
  padding: 12px 24px;
  cursor: pointer;

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

  ${layout}
`

export const Button: React.FC<
  {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
    type?: 'submit'
    variant: string
  } & LayoutProps
> = ({ children, disabled, onClick, type, variant, ...props }) => {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
      {...props}
    >
      <span>{children}</span>
    </ButtonStyled>
  )
}
