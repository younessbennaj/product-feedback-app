import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SortedSuggestionsList } from '../components/organisms/SortedSuggestionsList'
import { ProductFeedbackType, RequestProductFeedbackType } from '../types'

export const SuggestionsPage: React.FC = () => {
  const [sortedSuggestions, setSortedSuggestions] = useState<
    ProductFeedbackType[]
  >([])

  const navigate = useNavigate()

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
      <button
        onClick={() => {
          navigate('/add-suggestion')
        }}
      >
        <span>Add Feedback</span>
      </button>
      <SortedSuggestionsList sortedSuggestions={sortedSuggestions} />
    </section>
  )
}
