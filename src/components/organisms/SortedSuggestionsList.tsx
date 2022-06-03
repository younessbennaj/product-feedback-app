import React from 'react'
import styled from 'styled-components'

import { ProductFeedbackType } from '../../types'
import { Box } from '../atoms/Box'
import { SuggestionsListItem } from '../molecules/SuggestionsListItem'

interface SortedSuggestionsListTypes {
  sortedSuggestions: ProductFeedbackType[]
}

const SortedSuggestionsListWrapper = styled(Box)`
  li:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const SortedSuggestionsList: React.FC<SortedSuggestionsListTypes> = ({
  sortedSuggestions,
}) => {
  return (
    <SortedSuggestionsListWrapper as='ul'>
      {sortedSuggestions.map((suggestion: ProductFeedbackType) => (
        <SuggestionsListItem
          category={suggestion.category}
          commentsCount={suggestion.comments ? suggestion.comments.length : 0}
          description={suggestion.description}
          key={suggestion.id}
          title={suggestion.title}
          upvotes={suggestion.upvotes}
        />
      ))}
    </SortedSuggestionsListWrapper>
  )
}
