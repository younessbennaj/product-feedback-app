import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SortedSuggestionsList } from '../components/organisms/SortedSuggestionsList'
import { ProductFeedbackType } from '../types'

export const SuggestionsPage: React.FC<{
  sortedSuggestions: ProductFeedbackType[]
}> = ({ sortedSuggestions }) => {
  const navigate = useNavigate()

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
