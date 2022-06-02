import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { SuggestionListItem } from '../components/atoms/SuggestionListItem'
import { ProductFeedbackType, RequestProductFeedbackType } from '../types'

export const SuggestionsPage: React.FC = () => {
  const [suggestions, setSuggestions] = useState<ProductFeedbackType[]>([])

  useEffect(() => {
    axios.get<RequestProductFeedbackType>('/product-feedbacks').then((res) => {
      const productFeedbackFiltredBySuggestionStatus = res.data.data.filter(
        (suggestion: ProductFeedbackType) => {
          return suggestion.status === 'suggestion'
        }
      )

      const productFeedbackFiltredBySuggestionStatusSortedByScore = [
        ...productFeedbackFiltredBySuggestionStatus,
      ].sort((a, b) => {
        return b.upvotes - a.upvotes
      })

      setSuggestions(productFeedbackFiltredBySuggestionStatusSortedByScore)
    })
  }, [])
  return (
    <section>
      <h1 id='suggestions-heading'>Suggestions</h1>
      <ul aria-labelledby='suggestions-heading'>
        {suggestions.map((suggestion: ProductFeedbackType) => (
          <SuggestionListItem
            category={suggestion.category}
            commentsCount={suggestion.comments ? suggestion.comments.length : 0}
            description={suggestion.description}
            key={suggestion.id}
            title={suggestion.title}
            upvotes={suggestion.upvotes}
          />
        ))}
      </ul>
    </section>
  )
}
