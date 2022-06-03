import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { SortedSuggestionsList } from '../components/organisms/SortedSuggestionsList'
import { ProductFeedbackType, RequestProductFeedbackType } from '../types'

export const SuggestionsPage: React.FC = () => {
  const [sortedSuggestions, setSortedSuggestions] = useState<
    ProductFeedbackType[]
  >([])

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

      setSortedSuggestions(
        productFeedbackFiltredBySuggestionStatusSortedByScore
      )
    })
  }, [])
  return (
    <section>
      <SortedSuggestionsList sortedSuggestions={sortedSuggestions} />
    </section>
  )
}
