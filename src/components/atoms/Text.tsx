import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface TextProps {
  children: ReactNode
  size?: string
}

const textFontSizes = {
  default: '16px',
  md: '15px',
}

const StyledText = styled.p<{ size: string }>`
  color: #3a4374;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;

  @media (min-width: 600px) {
    font-weight: 400;
    font-size: ${({ size }) =>
      textFontSizes[size as keyof typeof textFontSizes]};
    line-height: 23px;
  }
`

export const Text: React.FC<TextProps> = ({ children, size = 'default' }) => {
  return <StyledText size={size}>{children}</StyledText>
}
