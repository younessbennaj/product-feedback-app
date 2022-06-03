import React from 'react'
import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import { capitalizeFirstLetter } from '../../utils'
import { CategoryLabel } from '../atoms/CategoryLabel'
import { CommentsCount } from '../atoms/CommentsCount'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { UpVoteToggleButton } from '../atoms/ToggleButton'

type SuggestionsListItemProps = {
  category: string
  commentsCount: number
  description: string
  title: string
  upvotes: number
}

const SuggestionsListItemWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
`

const Flex = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox}
`

export const SuggestionsListItem: React.FC<SuggestionsListItemProps> = ({
  category,
  commentsCount,
  description,
  title,
  upvotes,
}) => {
  return (
    <li>
      <SuggestionsListItemWrapper>
        <Heading as='h3' mb={2}>
          {title}
        </Heading>
        <Text color='grey' mb={2}>
          {description}
        </Text>
        <CategoryLabel label={capitalizeFirstLetter(category)} mb={3} />
        <Flex flexDirection='row' justifyContent='space-between'>
          <UpVoteToggleButton label={upvotes} />
          <CommentsCount count={commentsCount} />
        </Flex>
      </SuggestionsListItemWrapper>
    </li>
  )
}
