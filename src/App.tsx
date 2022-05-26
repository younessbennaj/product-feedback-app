import axios from 'axios'
import React, { useEffect, useState } from 'react'

type UserType = {
  image: string
  name: string
  username: string
}

type ReplyType = {
  content: string
  replyingTo: string
  user: UserType
}

type CommentType = {
  content: string
  id: number
  replies: ReplyType[]
  user: string
}

type ProductFeedbackType = {
  category: string
  comments: CommentType[]
  description: string
  id: number
  status: string
  title: string
  upvotes: number
}

type RequestProductFeedbackType = {
  data: ProductFeedbackType[]
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
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
          <li key={suggestion.id}>
            <button aria-label='upvote'>{suggestion.upvotes}</button>
            <h4>{suggestion.title}</h4>
            <p>{suggestion.description}</p>
            <span>{capitalizeFirstLetter(suggestion.category)}</span>
            <button aria-label='comments'>
              {suggestion.comments ? suggestion.comments.length : 0}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
