import React from 'react'
import styled from 'styled-components'
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system'

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

const Flex = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox};
`

const SuggestionsListItemWrapper = styled(Flex)`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
`

const Box = styled.div<LayoutProps & SpaceProps & FlexboxProps>`
  ${layout}
  ${space}
  ${flexbox};
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
      <SuggestionsListItemWrapper
        alignItems='center'
        flexWrap='wrap'
        justifyContent='space-between'
      >
        <Box order={1}>
          <UpVoteToggleButton label={upvotes} />
        </Box>
        <Box flex='100%'>
          <Heading as='h3' mb={2}>
            {title}
          </Heading>
          <Text color='grey' mb={2}>
            {description}
          </Text>
          <CategoryLabel label={capitalizeFirstLetter(category)} mb={3} />
        </Box>
        <Box order={2}>
          <CommentsCount count={commentsCount} />
        </Box>
      </SuggestionsListItemWrapper>
    </li>
  )
}
