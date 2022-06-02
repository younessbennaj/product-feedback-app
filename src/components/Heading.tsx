import React from 'react'
import styled, { css } from 'styled-components'

type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps {
  as: HeadingTagType
  children: string | React.ReactNode
}

const headingFontStyles = {
  h1: css`
    font-size: 24px;
    line-height: 35px;
  `,
  h2: css`
    font-size: 20px;
    line-height: 29px;
  `,
  h3: css`
    font-size: 18px;
    line-height: 26px;
  `,
  h4: css`
    font-size: 14px;
    line-height: 20px;
  `,
}

const StyledHeading = styled.div<{ as: HeadingTagType }>`
  color: #3a4374;
  font-weight: 700;
  ${({ as }) => {
    return headingFontStyles[as]
  }}
`

export const Heading: React.FC<HeadingProps> = ({ as, children }) => {
  return <StyledHeading as={as}>{children}</StyledHeading>
}
