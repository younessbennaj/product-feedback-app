import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SuggestionsFormPage } from './pages/SuggestionsFormPage'
import { SuggestionsPage } from './pages/SuggestionsPage'
import { ProductFeedbackType, RequestProductFeedbackType } from './types'

function App() {
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

  const addNewSuggestion = (suggestion: ProductFeedbackType) => {
    setSortedSuggestions([...sortedSuggestions, suggestion])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<SuggestionsPage sortedSuggestions={sortedSuggestions} />}
          path='/'
        />
        <Route
          element={<SuggestionsFormPage addNewSuggestion={addNewSuggestion} />}
          path='/add-suggestion'
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
