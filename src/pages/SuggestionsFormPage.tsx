import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CreateFeedbackSuggestionForm } from '../components/molecules/CreateFeedbackSuggestionForm'
import { ProductFeedbackType } from '../types'

type FormErrorsType = {
  category?: string
  description?: string
  title?: string
}

export const SuggestionsFormPage: React.FC<{
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
}> = ({ addNewSuggestion }) => {
  const navigate = useNavigate()

  const onSubmit = (values: FormErrorsType) => {
    axios.post('/product-feedbacks', values).then((res) => {
      addNewSuggestion(res.data.data)
      navigate('/')
    })
  }

  return (
    <section>
      <button onClick={() => navigate('/')}>
        <span>Go Back</span>
      </button>
      <h3>Create New Feedback</h3>
      <CreateFeedbackSuggestionForm
        addNewSuggestion={addNewSuggestion}
        onSubmit={onSubmit}
      />
    </section>
  )
}
