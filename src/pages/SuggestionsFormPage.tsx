import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex } from '../components/atoms/Flex'
import { InlineButton } from '../components/atoms/InlineButton'
import { FeedbackForm } from '../components/organisms/FeedbackForm'
import { ProductFeedbackType } from '../types'

type FormErrorsType = {
  category?: string
  description?: string
  title?: string
}

export const SuggestionsFormPageComponent: React.FC<{
  addNewSuggestion: (suggestion: ProductFeedbackType) => void
  onSubmit: (values: FormErrorsType) => void
}> = ({ addNewSuggestion, onSubmit }) => {
  const navigate = useNavigate()

  return (
    <section>
      <Flex alignItems='center' height='40px' mb='44px'>
        <InlineButton onClick={() => navigate('/')}>
          <span>Go Back</span>
        </InlineButton>
      </Flex>

      <FeedbackForm addNewSuggestion={addNewSuggestion} onSubmit={onSubmit} />
    </section>
  )
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
    <SuggestionsFormPageComponent
      addNewSuggestion={addNewSuggestion}
      onSubmit={onSubmit}
    />
  )
}
