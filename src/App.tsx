import axios from 'axios'
import React, { useEffect, useState } from 'react'

type SuggestionType = {
  description: string
  id: number
}

function App() {
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([])

  useEffect(() => {
    axios.get('/product-feedbacks').then((res: any) => {
      setSuggestions(res.data.data)
    })
  }, [])

  return (
    <section>
      <h1 id='suggestions-heading'>Suggestions</h1>
      <ul aria-labelledby='suggestions-heading'>
        {suggestions.map((suggestion: SuggestionType) => (
          <li key={suggestion.id}>{suggestion.description}</li>
        ))}
      </ul>
    </section>
  )
}

export default App
