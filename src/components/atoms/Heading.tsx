import React from 'react'
import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

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

type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4'

type StyledHeadingProps = { as: HeadingTagType } & SpaceProps

const StyledHeading = styled.div<StyledHeadingProps>`
  color: #3a4374;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  margin: 0;
  @media (min-width: 600px) {
    ${({ as }) => {
      return headingFontStyles[as]
    }}
  }
  ${space};
`

interface HeadingProps {
  as: HeadingTagType
  children: string | React.ReactNode
}

export const Heading: React.FC<HeadingProps & SpaceProps> = ({
  as,
  children,
  ...props
}) => {
  return (
    <StyledHeading as={as} {...props}>
      {children}
    </StyledHeading>
  )
}
