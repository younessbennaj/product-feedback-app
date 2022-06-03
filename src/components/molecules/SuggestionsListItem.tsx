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

const Box = styled.div<LayoutProps & SpaceProps & FlexboxProps>`
  ${layout}
  ${space}
  ${flexbox};
`

const Flex = styled(Box)<FlexboxProps>`
  display: flex;
  ${flexbox};
`

const SuggestionsListItemWrapper = styled(Flex)`
  background: #ffffff;
  border-radius: 10px;
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
        alignItems={['center', 'start']}
        flexWrap='wrap'
        justifyContent='space-between'
        p={['24px', '28px 32px']}
      >
        <Box mr={['0px', '40px']} order={[1, 0]}>
          <UpVoteToggleButton label={upvotes} />
        </Box>
        <Box flex={['100%', 'auto']} order={[0, 1]}>
          <Heading as='h3' mb={['8px', '4px']}>
            {title}
          </Heading>
          <Text color='grey' mb={['8px', '12px']}>
            {description}
          </Text>
          <CategoryLabel label={capitalizeFirstLetter(category)} mb={[3, 0]} />
        </Box>
        <Box alignSelf='center' order={2}>
          <CommentsCount count={commentsCount} />
        </Box>
      </SuggestionsListItemWrapper>
    </li>
  )
}
