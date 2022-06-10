import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { fontWeight, FontWeightProps, space, SpaceProps } from 'styled-system'

interface TextProps {
  children: ReactNode
  color?: 'grey'
  size?: string
}

const textFontSizes = {
  default: '16px',
  md: '15px',
}

const textColor = {
  grey: '#647196',
}

const StyledText = styled.p<
  { color?: string; size: string } & SpaceProps & FontWeightProps
>`
  color: ${({ color }) =>
    color ? textColor[color as keyof typeof textColor] : '#3a4374'};
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  margin: 0;
  @media (min-width: 600px) {
    font-weight: 400;
    font-size: ${({ size }) =>
      textFontSizes[size as keyof typeof textFontSizes]};
    line-height: 23px;
  }
  ${space};
  ${fontWeight};
`

export const Text: React.FC<TextProps & SpaceProps & FontWeightProps> = ({
  children,
  color,
  size = 'default',
  ...props
}) => {
  return (
    <StyledText color={color} size={size} {...props}>
      {children}
    </StyledText>
  )
}
