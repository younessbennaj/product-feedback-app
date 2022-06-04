import React from 'react'
import styled from 'styled-components'

import { ReactComponent as YourSvg } from '../../assets/icon-comments.svg'

interface CommentsCountProps {
  count: number
}

const CommentsCountWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;

    ${({ theme }) => `${theme.mediaQueries.small} {
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
    }`}
  }

  svg {
    margin-right: 8px;
  }
`

export const CommentsCount: React.FC<CommentsCountProps> = ({ count }) => {
  return (
    <CommentsCountWrapper aria-role='comments-count'>
      <YourSvg />
      <span>{count}</span>
    </CommentsCountWrapper>
  )
}
