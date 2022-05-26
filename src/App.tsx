import axios from 'axios'
import React, { useEffect, useState } from 'react'

type ProductFeedbackType = {
  description: string
  id: number
  status: string
}

type RequestProductFeedbackType = {
  data: ProductFeedbackType[]
}

function App() {
  const [suggestions, setSuggestions] = useState<ProductFeedbackType[]>([])

  useEffect(() => {
    axios.get<RequestProductFeedbackType>('/product-feedbacks').then((res) => {
      const productFeedbackFiltredBySuggestionStatus = res.data.data.filter(
        (suggestion: ProductFeedbackType) => {
          return suggestion.status === 'suggestion'
        }
      )
      setSuggestions(productFeedbackFiltredBySuggestionStatus)
    })
  }, [])

  return (
    <section>
      <h1 id='suggestions-heading'>Suggestions</h1>
      <ul aria-labelledby='suggestions-heading'>
        {suggestions.map((suggestion: ProductFeedbackType) => (
          <li key={suggestion.id}>{suggestion.description}</li>
        ))}
      </ul>
    </section>
  )
}

export default App
